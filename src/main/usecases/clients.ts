import RemoteClients from "@data/usecases/clients";

import { makeAxiosHttpClient } from "@main/factories/http/axios-http-client-factory";

export const makeRemoteClients = () =>
  new RemoteClients("clients", makeAxiosHttpClient());
