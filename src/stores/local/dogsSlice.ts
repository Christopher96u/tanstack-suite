import { createSliceWithImmer } from "zustand-slices/immer";

export const dogsSlice = createSliceWithImmer({
  name: "dogsStore",
  value: {
    dogs: 30,
    extraDogs: 60,
    otherDogs: 11,
  },
  actions: {
    incrementDogs: () => (state) => {
      state.dogs += 1;
    },
    incrementDogsBy: (quantity: number) => (state) => {
      state.dogs += quantity;
    },
  },
});

export const partializeDogsSlice = (store: typeof dogsSlice.value) => ({
  dogsStore: {
    dogs: store.dogs,
  },
});
