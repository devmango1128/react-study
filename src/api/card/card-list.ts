import { fetcher } from '@/lib/fetcher'
import { CardData } from '@/app/features/card/types'

export const fetchCardData = async (): Promise<CardData[]> => {
    return await fetcher<CardData[]>('/data/card-data.json')
}