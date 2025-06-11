import React from 'react'

interface CardGroupProps {
    children: React.ReactNode
    gap?: string
}

export default function CardGroup({ children, gap = 'gap-4' }: CardGroupProps) {
    return <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gap}`}>{children}</div>
}