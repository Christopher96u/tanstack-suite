import { Link, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { TanStackQueryDevtools } from "../Devtools/TanstackQuery";
import { TanStackRouterDevtools } from "../Devtools/TanstackRouter";

const Root = () => {
  return (
    <>
      <div className="RootWrapper">
        <div className="OutletWrapper">
          <div className="my-8">
            <Link to="/a" className="px-16 py-8 bg-slate-400">
              A
            </Link>
            <Link to="/b" className="px-16 py-8 mx-8 bg-slate-400">
              B
            </Link>
            <Link to="/c" className="px-16 py-8 bg-slate-400">
              C
            </Link>
          </div>
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
