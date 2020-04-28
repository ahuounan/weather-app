export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface HttpConfig {
  requestMiddlewares?: Array<RequestMiddleware>;
  responseMiddlewares?: Array<ResponseMiddleware>;
  baseUrl: string;
}

export type Fetch = (url: string, config?: RequestInit) => Promise<Response>;

export interface ParsedData<T = any> {
  response: Response;
  data: T;
}

export interface FetchConfig extends RequestInit {}

export type FetchWithParsedData<T = any> = (
  url: string,
  config?: FetchConfig
) => Promise<ParsedData<T>>;

export type RequestMiddleware = (fetch: Fetch) => Fetch;

export type ResponseMiddleware = (response: Response) => Response;
