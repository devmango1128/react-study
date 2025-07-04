'use client'

import Card from '@/components/card/Card'
import CardGroup from '@/components/card/CardGroup'
import { useCardData } from '@/hooks/card/useCardData'

export default function CardPage() {
    const { data } = useCardData()

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <CardGroup gap="gap-6">
                {/*data가 존재할 경우에만 .map() 실행 (Optional Chaining 사용)*/}
                {data?.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </CardGroup>
        </div>
    )
}