interface CardImageProps {
    src: string
    alt?: string
}

export default function CardImage({ src, alt = 'image' }: CardImageProps) {
    return <img src={src} alt={alt} className="w-full h-48 object-cover rounded-lg mb-2" />
}