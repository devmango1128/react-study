'use client'
// ✅ Next.js에서 이 컴포넌트를 클라이언트(브라우저)에서 실행되도록 지정
// 기본적으로 app 디렉토리의 컴포넌트는 서버 컴포넌트인데,
// 이벤트 처리, 상태 변경 등 브라우저 기능을 쓸 거면 반드시 'use client'가 필요함

import { ReactNode } from 'react'
// ✅ TypeScript용 타입을 import
// children의 타입을 명시하기 위해 사용됨
// ReactNode는 JSX 요소, 문자열, 숫자, null 등 React에서 렌더링 가능한 모든 것을 포함

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    )
}