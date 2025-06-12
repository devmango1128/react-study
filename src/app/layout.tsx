// 글로벌 CSS와 React Toastify 스타일을 불러옴.
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

// Header 컴포넌트를 불러옴.
import Header from '@/components/layout/Header'
import Providers from '@/app/providers'

// Next.js에서 사용하는 메타데이터 타입과 ReactNode 타입을 불러옴.
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// Google Fonts에서 Inter 폰트를 불러옴.
import { Inter } from 'next/font/google'

// Toast 메시지를 위한 React Toastify 컴포넌트를 불러옴.
import { ToastContainer } from 'react-toastify'

// Inter 폰트를 설정. (subsets는 필요한 문자 집합 설정)
const inter = Inter({ subsets: ['latin'] })

// 페이지 전체에서 사용할 메타데이터를 정의.
// Metadata 타입은 Next.js에서 자동 SEO 최적화를 위해 사용하는 타입이며, <head> 태그에 들어갈 내용을 정의
// export const를 사용함으로써 metadata는 **다른 파일(특히 Next.js 내부)**에서 접근가능
// Next.js는 app/layout.tsx 또는 app/page.tsx 내부에서 export const metadata를 자동으로 인식하여 HTML <head> 영역에 자동으로 적용
export const metadata: Metadata = {
    title: 'React Study',              // 페이지 제목
    description: 'React 학습하기',     // 페이지 설명
    keywords: ['React', 'Next.js', '공부'],
}

// 레이아웃 컴포넌트 정의.
// 모든 페이지는 이 레이아웃을 기반으로 렌더링됨.
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                {/* 공통 상단 Header 컴포넌트 출력 */}
                <Header />

                {/* 자식 페이지 컴포넌트 출력 */}
                <Providers>
                    {children}
                </Providers>

                {/* 오른쪽 상단에 자동으로 닫히는 Toast 메시지 표시 설정 */}
                <ToastContainer position="top-right" autoClose={3000} />
            </body>
        </html>
    )
}