const get = async <T>(url: string) => {
  const response = await fetch(url);
  const data: T = await response.json();
  return { response, data };
};

export const http = {
  get
};

export interface HttpResponse<T> {
  response: Response;
  data: T;
}
