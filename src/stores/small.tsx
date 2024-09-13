import { createZustandContext } from "@/lib";
import { create } from "zustand";

export type NonFunctionKeyNames<T> = Exclude<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in keyof T] : T[key] extends (...args: any) => any ? never : key;
  }[keyof T], undefined>;
   
export type RemoveFunctions<T> = Pick<T, NonFunctionKeyNames<T>>;

export type SmallStoreState = {
    smallCount: number;
    smallIncrement: () => void;
};

	
export type InitialSmallStoreState = RemoveFunctions<SmallStoreState>;

export const initialSmallStoreState : InitialSmallStoreState = {
    smallCount: 100
}

export const createSmallStore = (initialState: InitialSmallStoreState) =>
    create<SmallStoreState>((set) => ({
      smallCount: initialState.smallCount,
      smallIncrement: () => set((state) => ({ smallCount: state.smallCount + 1 })),
    }));

export const [SmallStoreProvider, useSmallStore] = createZustandContext<SmallStoreState>();