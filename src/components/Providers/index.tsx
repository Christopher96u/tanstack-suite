import { queryClient } from "@/config/queryClient";
import { router } from "@/config/router";
import { createGlobalStore, GlobalStoreProvider } from "@/stores/local";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";


const Providers = () => {
  // Maybe: get Zustand setter to store token
  return (
    <GlobalStoreProvider createStore={() => createGlobalStore()}>
     <QueryClientProvider client={queryClient}>
      {/* other providers */}
      <RouterProvider defaultPreload="intent" router={router} />
    </QueryClientProvider> 
    </GlobalStoreProvider>
  );
};

export { Providers };
