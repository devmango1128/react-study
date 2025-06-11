interface CardAuthorProps {
    name: string
}

export default function CardAuthor({ name }: CardAuthorProps) {
    return <div className="text-sm text-gray-500">👤 {name}</div>
}