import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { withSlices } from "zustand-slices";
import { createJSONStorage } from "zustand/middleware";
import createZustandContext from "@/lib/zustand-context";
import { kangaroosSlice, partializeKangaroosSlice } from "./kangaroosSlice";
import { dogsSlice, partializeDogsSlice } from "./dogsSlice";

export const {
  StoreProvider: LocalStoreProvider,
  useStoreApi: useLocalStoreApi,
  useSelector: useLocalStoreSelector,
} = createZustandContext(() =>
  create(
    devtools(
      persist(withSlices(kangaroosSlice, dogsSlice), {
        name: "LocalStore",
        storage: createJSONStorage(() => localStorage),
        partialize: (store) => ({
          ...partializeKangaroosSlice(store.kangaroosStore),
          ...partializeDogsSlice(store.dogsStore),
        }),
      }),
      {
        enabled: true, // Add flag to enabled just for dev|staging
      },
    ),
  ),
);
