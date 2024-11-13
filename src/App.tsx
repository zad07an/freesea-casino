import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { FullscreenLoading } from "./components/FullscreenLoading";
import { router } from "./router";

export default function App() {
  return (
    <main className="w-full max-w-[1920px] mx-auto">
      <Suspense fallback={<FullscreenLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </main>
  );
}
