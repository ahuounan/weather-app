export interface HttpResponse<T> {
  response: Response;
  data: T;
}
