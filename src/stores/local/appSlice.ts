import { ImmerStateCreator } from "@/lib";

interface AppSliceState {
    items: number,
    extraItems: number,
    otherItems: number,
}

interface AppSliceActions {
    increaseItems: () => void,
}

export interface AppSlice extends AppSliceState, AppSliceActions {}

export const createAppSlice : ImmerStateCreator<AppSlice> =
(set, _get, _store) => {
    // Inject default state if provided
    return {
        items: 10,
        extraItems: 7,
        otherItems: 9,
        increaseItems: () => set((state) => {
            state.items += 1 
        })
    }
}

type PersistedAppSlice = Pick<AppSlice, 'items' | 'extraItems'>

export const partializeAppSlice = (store: AppSlice): PersistedAppSlice => ({
    items: store.items,
    extraItems: store.extraItems
})