import { createRouter } from "@tanstack/react-router";
// import queryClient instance
import { routeTree } from "@/routeTree.gen";
import { queryClient } from "./queryClient";

export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => {
    return (
      <div className="p-2 text-2xl">
        Component Spinner - DefaultPendingComponent
      </div>
    );
  },
  defaultNotFoundComponent: () => {
    return (
      <div className="p-2 text-2xl">Component - DefaultNotFoundComponent</div>
    );
  },
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Declare Router as module to enjoy type-safety everywhere :)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
