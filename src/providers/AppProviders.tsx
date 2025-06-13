'use client'

import { ReactNode, useEffect } from 'react'
//React Query의 전역 클라이언트 생성기 및 Provider 컴포넌트
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//클라이언트 라우터: 페이지 이동을 코드로 제어할 때 사용
import { useRouter } from 'next/navigation'
//axios 인스턴스에 인터셉터(요청/응답 가로채기 로직) 연결
import { attachInterceptors } from '@/lib/axios/instance'
import { useLoadingStore } from '@/stores/loadingStore'

//React Query 클라이언트 인스턴스 생성
const queryClient = new QueryClient()

//앱의 전역 Provider 역할을 하는 컴포넌트
export default function AppProviders({ children }: { children: ReactNode }) {
    const router = useRouter() //클라이언트 사이드 라우터 훅 (페이지 이동에 사용)

    //컴포넌트 마운트 시, axios 인터셉터 연결
    useEffect(() => {
        // attachInterceptors: axios 요청 전/후에 동작하는 전역 로직을 연결
        // 첫 번째 인자: zustand 스토어 (로딩 상태 변경용)
        // 두 번째 인자: 에러 상태 코드에 따른 페이지 이동 처리
        attachInterceptors(useLoadingStore, (status: number) => {
            switch (status) {
                case 401:
                    router.push('/error?type=unauthorized') // 인증 오류
                    break
                case 403:
                    router.push('/error?type=forbidden') // 접근 권한 없음
                    break
                case 404:
                    router.push('/error?type=not-found') // 페이지 없음
                    break
                case 500:
                    router.push('/error?type=server') // 서버 에러
                    break
                default:
                    router.push('/error?type=unknown') // 기타 알 수 없는 에러
            }
        })
    }, [router]) //router가 바뀌는 경우에만 다시 실행 (사실상 한 번만 실행됨)

    //React Query의 글로벌 상태 관리 Provider로 children 감싸기
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}