import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { withSlices } from "zustand-slices";
import { catsSlice, partializeCatsSlice } from "./catsSlice";
import { koalasSlice, partializeKoalasSlice } from "./koalasSlice";
import { createJSONStorage } from "zustand/middleware";
import createZustandContext from "@/lib/zustand-context";

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
        partialize: (store) => ({
          ...partializeKoalasSlice(store.koalasStore),
          ...partializeCatsSlice(store.catsStore),
        }),
      }),
      {
        enabled: true, // Add flag to enabled just for dev|staging
      },
    ),
  ),
);
