//zustand 라이브러리에서 상태 관리를 위한 create 함수를 import
import { create } from 'zustand'

// 상태 구조를 정의하는 인터페이스
interface LoadingState {
    loading: boolean
    setLoading: (loading: boolean) => void
}

// 상태 저장소를 생성
export const useLoadingStore = create<LoadingState>((set) => ({
    loading: false,
    setLoading: (loading) => set({ loading }), //set은 상태를 변경할 수 있게 해주는 함수
}))