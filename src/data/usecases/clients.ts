import { UnexpectedError } from "@domain/errors";

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
}
