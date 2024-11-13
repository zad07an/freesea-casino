import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Layouts
const RootLayout = lazy(() => import("@/layouts/RootLayout"));

// Pages
const HomePage = lazy(() => import("@/pages/HomePage"));

export const ROUTES = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ] as RouteObject[],
  },
] satisfies RouteObject[];
