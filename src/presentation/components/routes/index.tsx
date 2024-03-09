import RouteFactory from "./route-factory";

import { BaseLayout } from "@presentation/components/layouts";

const routes = [
  {
    layout: BaseLayout,
    pages: [],
  },
];

const Router = () => <RouteFactory routes={routes} />;

export default Router;
