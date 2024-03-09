import React from "react";
import { Route, Routes } from "react-router-dom";

type RouteFactoryProps = {
  routes: {
    layout: React.FC<{ children: React.ReactNode }>;
    pages: {
      path: string;
      element: React.ReactNode;
    }[];
  }[];
};

const RouteFactory: React.FC<RouteFactoryProps> = ({
  routes,
}: RouteFactoryProps) => (
  <>
    {routes.map((route, index) => {
      const { layout: Layout } = route;
      return (
        <Layout key={index}>
          <Routes>
            {route.pages.map((page, pageIndex) => (
              <Route key={pageIndex} path={page.path} element={page.element} />
            ))}
          </Routes>
        </Layout>
      );
    })}
  </>
);

export default RouteFactory;
