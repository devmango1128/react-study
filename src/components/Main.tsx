'use client'

import MainLayout from '@/components/layout/MainLayout'
import UITabPanel from '@/app/feature/ui-tabs'
import ModuleTabPanel from '@/app/feature/module-tabs'
import { useState } from 'react'
// ✅ MainLayout 컴포넌트를 불러옴
// MainLayout은 children을 받아서 화면 전체를 감싸는 레이아웃 역할

export default function Main() {

    const tabs = ['공통 UI 컴포넌트', '공통 모듈']
    const [activeTab, setActiveTab] = useState(0)

    return (
        <MainLayout>
            {/* ✅ 이 <div>는 MainLayout 컴포넌트의 {children} 위치로 전달됨 */}
            {/* 즉, MainLayout 내부의 {children} 자리에 이 내용이 렌더링됨 */}
            <div className="w-full max-w-2xl mx-auto p-6">
                {/* 탭 버튼들 */}
                <div className="flex bg-gray-500 rounded-lg p-1">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all${activeTab === index ? ' bg-white text-blue-600 shadow-sm' : ' text-white hover:text-blue-600'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-blue-700">
                {activeTab === 0 && <UITabPanel />}
                {activeTab === 1 && <ModuleTabPanel />}
            </div>
        </MainLayout>
    );
}