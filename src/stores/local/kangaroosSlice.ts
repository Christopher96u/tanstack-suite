import { createSliceWithImmer } from "zustand-slices/immer";

export const kangaroosSlice = createSliceWithImmer({
  name: "kangaroosStore",
  value: {
    kangaroos: 30,
    extraKangaroos: 60,
    otherKangaroos: 11,
  },
  actions: {
    incrementKangaroos: () => (state) => {
      state.kangaroos += 1;
    },
    incrementKangaroosBy: (quantity: number) => (state) => {
      state.kangaroos += quantity;
    },
  },
});

export const partializeKangaroosSlice = (
  store: typeof kangaroosSlice.value,
) => ({
  kangaroosStore: {
    kangaroos: store.kangaroos,
  },
});
