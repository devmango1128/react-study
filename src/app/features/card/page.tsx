'use client'

import Card from '@/components/card/Card'
import CardGroup from '@/components/card/CardGroup'
import { CardData } from '@/app/features/card/types'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CardPage() {
    const [data, setData]   = useState<CardData[]>([])

    useEffect(() => {
        axios.get('/data/card-data.json')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    })

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <CardGroup gap="gap-6">
                {data.map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </CardGroup>
        </div>
    )
}