import { Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { TanStackQueryDevtools } from "../Devtools/TanstackQuery";
import { TanStackRouterDevtools } from "../Devtools/TanstackRouter";

const Root = () => {
  return (
    <>
      <div className="RootWrapper">
        <div className="OutletWrapper">
          <Outlet />
        </div>
      </div>
      <div className="DevtoolsWrapper">
        <Suspense fallback={<div>Loading Devtools ...</div>}>
          <TanStackQueryDevtools />
          <TanStackRouterDevtools />
        </Suspense>
      </div>
    </>
  );
};
export { Root };
