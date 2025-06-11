'use client'

import UITabPanel from '@/app/features/tabs/ui-tabs'
import ModuleTabPanel from '@/app/features/tabs/module-tabs'
import { useState } from 'react'

export default function Tabs() {
    const tabs = ['공통 UI 컴포넌트', '공통 모듈']
    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <div className="w-full max-w-2xl mx-auto p-4">
                {/* 탭 버튼들 */}
                <div className="flex bg-gray-500 rounded-lg p-1">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md hover:cursor-pointer 
                                transition-all${activeTab === index ? ' bg-white text-blue-600 shadow-sm' : ' text-white hover:text-blue-600'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-blue-700">
                {activeTab === 0 && <UITabPanel />}
                {activeTab === 1 && <ModuleTabPanel />}
            </div>
        </>
    )
}