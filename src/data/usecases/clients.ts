import { UnexpectedError, BadRequestError } from "@domain/errors";

import { HttpStatusCode } from "@data/protocols/http/http-client";

import AxiosHttpClient from "@infra/http/axios-http-client";

import { IResponse, IClient } from "@presentation/interfaces";

export default class RemoteClients {
  url: string;

  httpClient: AxiosHttpClient;

  constructor(url: string, httpClient: AxiosHttpClient) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async load(params?: { name?: string; email?: string; phone?: string }) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
      params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as unknown as IResponse<IClient>;
      default:
        throw new UnexpectedError();
    }
  }

  async post(body: Omit<IClient, "id">) {
    const httpResponse = (await this.httpClient.request({
      url: this.url,
      method: "post",
      data: body,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    })) as any;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new BadRequestError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  }
}
