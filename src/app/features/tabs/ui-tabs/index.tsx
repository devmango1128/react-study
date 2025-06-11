'use client'

import Link from 'next/link'

export default function UITabPanel() {
    const items = [
        { name: 'Card', path: 'features/card', description: '카드 UI 구성' },
        { name: 'Accordion', path: 'features/accordion ', description: '메뉴 아코디언' },
        { name: 'Tab', path: 'features/tab', description: 'Tab' },
        { name: 'Rolling', path: 'features/rolling', description: '롤링 기능' },
        { name: 'Form', path: 'features/form', description: 'form 제어' },
        { name: 'Drag', path: 'features/drag', description: '드래그 & 드롭 정렬' },
        { name: 'Modal', path: 'features/modal', description: '모달창' },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item) => (
                <Link key={item.path} href={item.path}>
                    <div
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-50">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}