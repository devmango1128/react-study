'use client'

import MainLayout from '@/components/layout/MainLayout'
import Tabs from '@/app/features/tabs'
// ✅ MainLayout 컴포넌트를 불러옴
// MainLayout은 children을 받아서 화면 전체를 감싸는 레이아웃 역할

export default function Main() {
    return (
        <MainLayout>
            {/* ✅ 이 <div>는 MainLayout 컴포넌트의 {children} 위치로 전달됨 */}
            {/* 즉, MainLayout 내부의 {children} 자리에 이 내용이 렌더링됨 */}
            <Tabs />
        </MainLayout>
    );
}