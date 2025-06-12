'use client'

import { ReactNode, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { attachInterceptors } from '@/lib/axios/instance'
import { useLoadingStore } from '@/stores/loadingStore'

const queryClient = new QueryClient()

export default function AppProviders({ children }: { children: ReactNode }) {
    const router = useRouter()

    useEffect(() => {
        attachInterceptors(useLoadingStore, (status: number) => {
            switch (status) {
                case 401:
                    router.push('/error?type=unauthorized')
                    break
                case 403:
                    router.push('/error?type=forbidden')
                    break
                case 404:
                    router.push('/error?type=not-found')
                    break
                case 500:
                    router.push('/error?type=server')
                    break
                default:
                    router.push('/error?type=unknown')
            }
        })
    }, [router])

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}