'use client'

import React from 'react'

interface CardProps {
    children: React.ReactNode
}

export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-xl border border-gray-200 shadow-md p-5 bg-white hover:shadow-lg transition">
            {children}
        </div>
    )
}