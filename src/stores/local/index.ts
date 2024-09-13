import { create } from "zustand";
import { AppSlice, createAppSlice, partializeAppSlice } from "./appSlice";
import { createJSONStorage, persist } from "zustand/middleware";
//import { createZustandContext, type RemoveFunctions } from "@/lib";
import { immer } from "zustand/middleware/immer";
import { createDogsSlice, DogsSlice, partializeDogsSlice } from "./dogsSlice";

type RootStore = AppSlice & DogsSlice; // AppSlice & OtherSlice & ...

type InitialState = RemoveFunctions<RootStore>;
// make initialState optional
// make a better type-safe inference where
// initialState is a union of Slice1 & Slice2, etc and also
// if there is Slice1, we need to provide all the fields
// Make sure the SliceType just takes fields, not the functions
export const createGlobalStore = (initialState?: InitialState) =>
  create<RootStore>()(
    persist(
      immer((...args) => ({
        // need to pass down initialState to createAppSlice function
        //...initialState,
        ...createAppSlice(...args),
        ...createDogsSlice(...args),
        ///...createOtherSlice(...args),
      })),
      {
        name: "food-storage",
        storage: createJSONStorage(() => localStorage),
        partialize: (store: RootStore) => ({
          ...partializeAppSlice(store),
          ...partializeDogsSlice(store),
          //...partializeOtherSlice(store)
        }),
      },
    ),
  );

//export const [GlobalStoreProvider, useGlobalStore] =
//createZustandContext<RootStore>();
