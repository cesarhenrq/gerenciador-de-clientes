import AxiosHttpClient from "@infra/http/axios-http-client/";

import settings from "@main/configs/settings";

export const makeAxiosHttpClient = () => new AxiosHttpClient(settings.API_URL);
