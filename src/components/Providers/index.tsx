import { queryClient } from "@/config/queryClient";
import { router } from "@/config/router";
import { LocalStoreProvider } from "@/stores/local";
import { SessionStoreProvider } from "@/stores/session";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

const Providers = () => {
  // Maybe: get Zustand setter to store token
  return (
    <HelmetProvider>
      <LocalStoreProvider>
        <SessionStoreProvider>
          <QueryClientProvider client={queryClient}>
            {/* other providers */}
            <RouterProvider defaultPreload="intent" router={router} />
          </QueryClientProvider>
        </SessionStoreProvider>
      </LocalStoreProvider>
    </HelmetProvider>
  );
};

export { Providers };
