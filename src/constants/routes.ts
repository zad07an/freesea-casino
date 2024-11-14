import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Layouts
const RootLayout = lazy(() => import("@/layouts/RootLayout"));

// Pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const DicePage = lazy(() => import("@/pages/DicePage"));

export const ROUTES = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/dice",
        Component: DicePage,
      },
    ] as RouteObject[],
  },
] satisfies RouteObject[];
