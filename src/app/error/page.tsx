'use client'

import { useSearchParams } from 'next/navigation'

const errorMessages: Record<string, string> = {
    unauthorized: '로그인이 필요합니다.',
    forbidden: '접근 권한이 없습니다.',
    'not-found': '페이지를 찾을 수 없습니다.',
    server: '서버 오류가 발생했습니다.',
    unknown: '알 수 없는 오류가 발생했습니다.',
}

export default function ErrorPage() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type') || 'unknown'

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">에러가 발생했습니다.</h1>
                <p className="text-gray-700">{errorMessages[type]}</p>
            </div>
        </div>
    )
}