import { create } from 'zustand'

interface UiState {
    loading: boolean
    startLoading: () => void
    endLoading: () => void
}

export const useUiStore = create<UiState>((set) => ({
    loading: false,
    startLoading: () => set({ loading: true }),
    endLoading: () => set({ loading: false }),
}))