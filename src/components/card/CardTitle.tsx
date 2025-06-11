interface CardaTitleProps {
    title: string
}

export default function CardTitle({title}: CardaTitleProps) {
    return <h2 className="text-lg font-bold text-gray-800 mb-1">{title}</h2>
}