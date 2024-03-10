import { UnexpectedError } from "@domain/errors";

import { HttpStatusCode } from "@data/protocols/http/http-client";

import AxiosHttpClient from "@infra/http/axios-http-client";

import { IResponse, IRoute } from "@presentation/interfaces";

export default class RemoteDelivery {
  url: string;

  httpClient: AxiosHttpClient;

  constructor(url: string, httpClient: AxiosHttpClient) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async load() {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as unknown as IResponse<IRoute>;
      default:
        throw new UnexpectedError();
    }
  }
}
