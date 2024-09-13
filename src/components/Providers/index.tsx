import { queryClient } from "@/config/queryClient";
import { router } from "@/config/router";
import { SessionStoreProvider } from "@/stores/session";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

const Providers = () => {
  // Maybe: get Zustand setter to store token
  return (
    <SessionStoreProvider>
      <QueryClientProvider client={queryClient}>
        {/* other providers */}
        <RouterProvider defaultPreload="intent" router={router} />
      </QueryClientProvider>
    </SessionStoreProvider>
  );
};

export { Providers };
