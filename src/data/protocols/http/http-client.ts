export type HttpRequest = {
  url: string;
  method: HttpMethod;
  data?: object;
  headers?: object;
  params?: object;
};

export interface HttpClient<R = object> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpMethod = "post" | "get" | "put" | "delete";

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = object> = {
  statusCode: HttpStatusCode;
  body?: T;
};
