import { fetchAccordionMenuData } from '@/api/accordion/getAccordionMenu'
import { AccordionMenuItem } from '@/types/ui-tabs/accordion-menu-item'
import { useQuery } from '@tanstack/react-query'

export const useAccordionMenuData = () => {
    return useQuery<AccordionMenuItem[]> ({
        queryKey: ['accordionMenuData'],
        queryFn: fetchAccordionMenuData,
        staleTime: 1000 * 60 * 10
    })
}