import create from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
    slider: true,
}

const useStore = create(
    persist(
        (set) => ({
            ...initialState,
            reset: () => set(initialState),
        }),
        {
            name: 'jonathan-depaepe.be',
            getStorage: () => sessionStorage,
        }
    )
)

export default useStore