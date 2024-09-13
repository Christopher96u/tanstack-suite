import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { withSlices } from "zustand-slices";
import { catsSlice } from "./catsSlice";
import { koalasSlice, partializeKoalasSlice } from "./koalasSlice";
import { createJSONStorage } from "zustand/middleware";
import createZustandContext from "@/lib";

export const {
  StoreProvider: SessionStoreProvider,
  useStoreApi: useSesionStoreApi,
  useSelector: useSessionStoreSelector,
} = createZustandContext(() =>
  create(
    devtools(
      persist(withSlices(catsSlice, koalasSlice), {
        name: "SessionStore",
        storage: createJSONStorage(() => sessionStorage),
        // Add partialize - nice to have
        //partialize: (store) => ({
        // add partials here
        //...partializeKoalasSlice(store.koalasStore),
        //}),
      }),
      {
        enabled: true, // Add flag to enabled just for dev|staging
      },
    ),
  ),
);
