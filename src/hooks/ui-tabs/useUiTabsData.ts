import { fetchUiTabsData } from '@/api/ui-tabs/ui-tabs-list'
import { UiTabsData } from '@/app/features/tabs/ui-tabs/types'
import { useQuery } from '@tanstack/react-query'

export const useUiTabsData = () => {
    return useQuery<UiTabsData[]>({
        queryKey: ['uiData'],
        queryFn: fetchUiTabsData,
        staleTime: 1000 * 60 * 10
    })
}