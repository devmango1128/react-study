'use client'

import { useLoadingStore } from '@/stores/loadingStore'

export default function Loading() {
    const loading = useLoadingStore(state => state.loading)

    if (!loading) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
    )
}