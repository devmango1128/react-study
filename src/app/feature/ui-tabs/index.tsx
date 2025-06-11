'use client'

import Link from "next/link";

export default function UITabPanel() {
    const items = [
        { name: 'Card', path: '/feature/card-ui', description: '카드 컴포넌트 구성 샘플' },
        { name: 'Rolling', path: 'feature/rolling', description: '롤링 기능 샘플' },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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