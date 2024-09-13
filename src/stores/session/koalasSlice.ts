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

type PersistedKoalasSlice = typeof koalasSlice; // | "extraKoalas" | "otherKoalas"

export const partializeKoalasSlice = (
  store: typeof koalasSlice,
): PersistedKoalasSlice => ({
  name: store.name,
});
