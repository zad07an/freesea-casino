import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants/routes";

export const router = createBrowserRouter(
  ROUTES.map((route) => ({
    path: route.path,
    Component: route.Component,
    children: route.children?.map((childRoute) => ({
      path: childRoute.path,
      Component: childRoute.Component,
    })),
  }))
);
