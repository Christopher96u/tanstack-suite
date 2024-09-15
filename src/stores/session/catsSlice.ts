import { createSliceWithImmer } from "zustand-slices/immer";

export const catsSlice = createSliceWithImmer({
  name: "catsStore",
  value: {
    cats: 5,
    extraCats: 40,
    otherCats: 93,
  },
  actions: {
    incrementCats: () => (state) => {
      state.cats += 1;
    },
    incrementCatsBy: (quantity: number) => (state) => {
      state.cats += quantity;
    },
  },
});

export const partializeCatsSlice = (store: typeof catsSlice.value) => ({
  catsStore: {
    cats: store.cats,
  },
});
