'use client';

import Image from 'next/image';

interface AvatarProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function DynamicAvatar({
    src,
    alt,
    width = 100,
    height = 100,
    className = '',
}: AvatarProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className={`object-contain rounded-full ${className}`}
        />
    );
}
