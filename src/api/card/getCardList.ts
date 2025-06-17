import { get } from '@/lib/api-client'
import { CardData } from '@/app/features/(ui-tabs)/card/types'

export const fetchCardData = async (): Promise<CardData[]> => {
    return await get<CardData[]>('/data/card-data.json')
}