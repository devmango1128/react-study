//useLoadingStore처럼 zustand 상태를 사용하는 경우 무조건 use client 필요
'use client'

import { useLoadingStore } from '@/stores/loadingStore'

export default function Loading() {
    //zustand의 부분 상태 선택(select) 기능.
    //state.loading이 변경되면 이 컴포넌트만 리렌더링됨 → 성능 최적화에 좋음.
    //불필요한 전체 상태 구독을 피함.
    const loading = useLoadingStore(state => state.loading)

    //loading === false이면 아무것도 렌더링하지 않음.
    if (!loading) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
    )
}