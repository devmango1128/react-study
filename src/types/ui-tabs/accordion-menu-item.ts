export interface AccordionMenuItem {
    title: string
    children?: AccordionMenuItem[]
}

export interface AccordionMenuState {
    openMap: Record<string, boolean>
    toggle: (key: string) => void
    reset: () => void
}