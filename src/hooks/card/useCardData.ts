import { fetchCardData } from '@/api/card/card-list'
import { useQuery } from '@tanstack/react-query'
import { CardData } from '@/app/features/card/types'

export const useCardData = () => {
    return useQuery<CardData[]>({
        queryKey: ['cardData'],
        queryFn: fetchCardData,
        staleTime: 1000 * 60 * 5,
    })
}