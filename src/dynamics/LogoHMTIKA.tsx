import Image from 'next/image';
import { FC, memo } from 'react';

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
}

// Komponen utama
const LogoHMTIKA: FC<LogoProps> = ({ width = 200, height = 200, className = '' }) => {
    return (
        <div className="relative">
            <Image
                src="/assets/images/LOGO-HMTIKA.webp"
                alt="LOGO HMTIKA"
                width={width}
                height={height}
                priority
                className={`object-contain transition-transform duration-300 hover:scale-105 ${className}`}
            />
        </div>
    );
};

// Fungsi pembanding props untuk mencegah re-render jika props tidak berubah
const areEqual = (prev: LogoProps, next: LogoProps): boolean => {
    return (
        prev.width === next.width &&
        prev.height === next.height &&
        prev.className === next.className
    );
};

export default memo(LogoHMTIKA, areEqual);
