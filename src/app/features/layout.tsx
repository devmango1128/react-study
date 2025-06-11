'use client'

import MainLayout from '@/components/layout/MainLayout'
import { ReactNode } from 'react'

export default function FeatureLayout({ children }: { children: ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}