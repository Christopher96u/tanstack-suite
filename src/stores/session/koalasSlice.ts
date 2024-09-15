import { createSliceWithImmer } from "zustand-slices/immer";

export const koalasSlice = createSliceWithImmer({
  name: "koalasStore",
  value: {
    koalas: 30,
    extraKoalas: 60,
    otherKoalas: 11,
  },
  actions: {
    incrementKoalas: () => (state) => {
      state.koalas += 1;
    },
    incrementKoalasBy: (quantity: number) => (state) => {
      state.koalas += quantity;
    },
  },
});

export const partializeKoalasSlice = (store: typeof koalasSlice.value) => ({
  koalasStore: {
    koalas: store.koalas,
  },
});
