import { ImmerStateCreator } from "@/lib";

interface DogsSliceState {
    dogs: number,
    extraDogs: number,
    otherDogs: number,
}

interface DogsSliceActions {
    increaseDogs: () => void,
}

export interface DogsSlice extends DogsSliceState, DogsSliceActions {}

export const createDogsSlice : ImmerStateCreator<DogsSlice> =
(set, _get, _store) => {
    // Inject default state if provided
    return {
        dogs: 30,
        extraDogs: 21,
        otherDogs: 82,
        increaseDogs: () => set((state) => {
            state.dogs += 1 
        })
    }
}

type PersistedDogsSlice = Pick<DogsSlice, 'dogs' | 'extraDogs'>

export const partializeDogsSlice = (store: DogsSlice): PersistedDogsSlice => ({
    dogs: store.dogs,
    extraDogs: store.extraDogs
})