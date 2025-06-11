'use client'

import React from 'react'
import { CardData } from '@/app/features/card/types'
import CardTitle from '@/components/card/CardTitle'
import CardAuthor from '@/components/card/CardAuthor'
import CardContent from '@/components/card/CardContent'
import CardImage from '@/components/card/CardImage'

interface CardProps {
    data: CardData
}

export default function Card({ data }: CardProps) {
    const { title, author, image, content } = data

    return (
        <div className="rounded-xl border border-gray-200 shadow-md p-5 bg-white hover:shadow-lg transition">
            <CardTitle title={title} />
            {author && <CardAuthor name={author} />}
            {image && <CardImage src={image} />}
            {content && <CardContent text={content} />}
        </div>
    )
}