/* eslint class-methods-use-this: 0 */
import axios, { AxiosStatic } from "axios";

import { HttpRequest, HttpResponse } from "@data/protocols/http/http-client";

class AxiosHttpClient {
  api: AxiosStatic;

  constructor(private readonly baseUrl: string | undefined) {
    const api = axios;
    this.api = api;
  }

  async request({
    headers,
    method,
    url,
    data,
    params,
  }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse;

    try {
      axiosResponse = await this.api.request({
        url: this.baseUrl + url,
        method,
        data,
        headers,
        params,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export default AxiosHttpClient;
