import {
  Fetch,
  HttpMethods,
  RequestMiddleware,
  ResponseMiddleware,
  FetchWithParsedData,
  HttpConfig,
  ParsedData,
  FetchConfig
} from './types';

export class Http {
  private driver = fetch.bind(window);
  private requestMiddlewares: Array<RequestMiddleware>;
  private responseMiddlewares: Array<ResponseMiddleware>;
  private baseUrl: string;

  constructor(config?: HttpConfig) {
    const { baseUrl, requestMiddlewares, responseMiddlewares } = config || {};
    this.requestMiddlewares = requestMiddlewares || [];
    this.responseMiddlewares = responseMiddlewares || [];
    this.baseUrl = baseUrl || '';
  }

  fetch: Fetch = async (url: string, config?: FetchConfig) => {
    return this.driver(this.baseUrl + url, config);
  };

  get<T>(url: string, config?: FetchConfig): Promise<ParsedData<T>> {
    return this.fetchWithMiddlware(url, { ...config, method: HttpMethods.GET });
  }

  post<T>(url: string, body: FetchConfig['body'], config?: FetchConfig): Promise<ParsedData<T>> {
    return this.fetchWithMiddlware(url, { ...config, body, method: HttpMethods.POST });
  }

  put<T>(url: string, body: FetchConfig['body'], config?: FetchConfig): Promise<ParsedData<T>> {
    return this.fetchWithMiddlware(url, { ...config, body, method: HttpMethods.PUT });
  }

  delete<T>(url: string, body: FetchConfig['body'], config?: FetchConfig): Promise<ParsedData<T>> {
    return this.fetchWithMiddlware(url, { ...config, body, method: HttpMethods.DELETE });
  }

  fetchWithMiddlware: FetchWithParsedData = async (url: string, config?: FetchConfig) => {
    let fetchWithMiddleware = this.fetch;
    for (const middleware of this.requestMiddlewares) {
      fetchWithMiddleware = middleware(fetchWithMiddleware);
    }
    let response = await fetchWithMiddleware(url, config);
    for (const middleware of this.responseMiddlewares) {
      response = await middleware(response);
    }
    const parsedResponse = await this.parseResponse(response);
    return parsedResponse;
  };

  parseResponse = async (response: Response) => {
    const data = await response.json();
    return { response, data };
  };
}
