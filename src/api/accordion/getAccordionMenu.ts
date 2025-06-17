import { get } from '@/lib/api-client'
import { AccordionMenuItem } from '@/types/ui-tabs/accordion-menu-item'

export const fetchAccordionMenuData = async (): Promise<AccordionMenuItem[]> => {
    return await get<AccordionMenuItem[]>('/data/accordion-menu-data.json')
}