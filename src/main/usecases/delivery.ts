import RemoteDelivery from "@data/usecases/delivery";

import { makeAxiosHttpClient } from "@main/factories/http/axios-http-client-factory";

export const makeRemoteDelivery = () =>
  new RemoteDelivery("delivery", makeAxiosHttpClient());
