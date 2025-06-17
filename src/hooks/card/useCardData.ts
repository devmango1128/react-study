import { fetchCardData } from '@/api/card/getCardList'
import { useQuery } from '@tanstack/react-query'
import { CardData } from '@/app/features/(ui-tabs)/card/types'

export const useCardData = () => {
    //CardData[] 타입의 데이터를 가져오는 React Query 훅 사용
    return useQuery<CardData[]>({
        queryKey: ['cardData'], //이 데이터의 고유 키(이름) → 내부 캐시, 리페치 기준 등으로 사용됨
        queryFn: fetchCardData, //데이터를 실제로 불러오는 함수 (비동기 함수여야 함)
        staleTime: 1000 * 60 * 5, //데이터를 5분간 신선하게 유지 → 5분 안에는 다시 요청 안 함
    })
}