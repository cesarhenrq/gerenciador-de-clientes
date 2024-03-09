import RouteFactory from "./route-factory";

import { BaseLayout } from "@presentation/components/layouts";

import { MakeClients, MakeNewClient } from "@main/factories/pages";

const routes = [
  {
    layout: BaseLayout,
    pages: [
      {
        path: "/clients",
        element: <MakeClients />,
      },
      {
        path: "/new-client",
        element: <MakeNewClient />,
      },
    ],
  },
];

const Router = () => <RouteFactory routes={routes} />;

export default Router;
