import Image from 'next/image';
import { FC, memo } from 'react';

interface BannerProps {
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

const BannerHMTIKA: FC<BannerProps> = ({
    width = 1920,
    height = 720,
    className = '',
    priority = false,
}) => {
    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src="/assets/images/banner1.jpg"
                alt="Banner HMTIKA"
                width={width}
                height={height}
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
                sizes="100vw"
                className={`object-cover transition-transform duration-500 hover:scale-105 w-full h-auto ${className}`}
            />
        </div>
    );
};

const areEqual = (prev: BannerProps, next: BannerProps): boolean => {
    return (
        prev.width === next.width &&
        prev.height === next.height &&
        prev.className === next.className &&
        prev.priority === next.priority
    );
};

export default memo(BannerHMTIKA, areEqual);
