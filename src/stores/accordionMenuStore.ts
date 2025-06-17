import { AccordionMenuState } from '@/types/ui-tabs/accordion-menu-item'
import { create } from 'zustand'

export const useAccordionMenuStore = create<AccordionMenuState>((set) => ({
    openMap: {},
    toggle: (key) =>
        set((state) => ({
            openMap: {
                ...state.openMap,
                [key]: !state.openMap[key],
            }
        })),
    reset: () => set({ openMap: {} }),
}))