import { get } from '@/lib/api-client'
import { UiTabsData } from '@/app/features/tabs/ui-tabs/types'

export const fetchUiTabsData = async (): Promise<UiTabsData[]> => {
    return await get<UiTabsData[]>('/data/ui-tabs-data.json')
}