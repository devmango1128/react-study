interface CardContentProps {
    text: string
}

export default function CardContent({ text }: CardContentProps) {
    return <p className="text-gray-700 text-sm mt-2">{text}</p>
}