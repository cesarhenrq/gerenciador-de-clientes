import RouteFactory from "./route-factory";

import { BaseLayout } from "@presentation/components/layouts";

import { MakeClients } from "@main/factories/pages";

const routes = [
  {
    layout: BaseLayout,
    pages: [
      {
        path: "/clients",
        element: <MakeClients />,
      },
    ],
  },
];

const Router = () => <RouteFactory routes={routes} />;

export default Router;
