'use client'; // Karena interaksi berbasis cursor → hanya jalan di klien

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface DecayCardProps {
    width?: string;
    height?: string;
    image?: string;
    className?: string;
    children?: ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
    width = '100%',
    height = '100%',
    image = 'https://picsum.photos/300/400?grayscale',
    className = '',
    children,
}) => {
    const svgRef = useRef<HTMLDivElement | null>(null);
    const displacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);

    const cursor = useRef({ x: 0, y: 0 });
    const cachedCursor = useRef({ x: 0, y: 0 });
    const winsize = useRef({ width: 0, height: 0 });

    useEffect(() => {
        // ✔️ Safe access inside useEffect
        winsize.current = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        cursor.current = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
        cachedCursor.current = { ...cursor.current };

        const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;
        const map = (x: number, a: number, b: number, c: number, d: number): number =>
            ((x - a) * (d - c)) / (b - a) + c;
        const distance = (x1: number, x2: number, y1: number, y2: number): number =>
            Math.hypot(x1 - x2, y1 - y2);

        const handleResize = () => {
            winsize.current = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        };

        const handleMouseMove = (ev: MouseEvent) => {
            cursor.current = { x: ev.clientX, y: ev.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const imgValues = {
            imgTransforms: { x: 0, y: 0, rz: 0 },
            displacementScale: 0,
        };

        const render = () => {
            const targetX = lerp(
                imgValues.imgTransforms.x,
                map(cursor.current.x, 0, winsize.current.width, -120, 120),
                0.1
            );
            const targetY = lerp(
                imgValues.imgTransforms.y,
                map(cursor.current.y, 0, winsize.current.height, -120, 120),
                0.1
            );
            const targetRz = lerp(
                imgValues.imgTransforms.rz,
                map(cursor.current.x, 0, winsize.current.width, -10, 10),
                0.1
            );

            const bound = 50;
            imgValues.imgTransforms.x = Math.max(-bound, Math.min(bound, targetX));
            imgValues.imgTransforms.y = Math.max(-bound, Math.min(bound, targetY));
            imgValues.imgTransforms.rz = targetRz;

            if (svgRef.current) {
                gsap.set(svgRef.current, {
                    x: imgValues.imgTransforms.x,
                    y: imgValues.imgTransforms.y,
                    rotateZ: imgValues.imgTransforms.rz,
                });
            }

            const cursorTravelledDistance = distance(
                cachedCursor.current.x,
                cursor.current.x,
                cachedCursor.current.y,
                cursor.current.y
            );

            imgValues.displacementScale = lerp(
                imgValues.displacementScale,
                map(cursorTravelledDistance, 0, 200, 0, 400),
                0.06
            );

            if (displacementMapRef.current) {
                gsap.set(displacementMapRef.current, {
                    attr: { scale: imgValues.displacementScale },
                });
            }

            cachedCursor.current = { ...cursor.current };
            requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={svgRef}
            className={`relative ${className}`}
            style={{ width, height }}
        >
            <svg
                viewBox="-60 -75 720 900"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full block [will-change:transform]"
            >
                <filter id="imgFilter">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0.015"
                        numOctaves="5"
                        seed="4"
                        stitchTiles="stitch"
                        result="turbulence1"
                    />
                    <feDisplacementMap
                        ref={displacementMapRef}
                        in="SourceGraphic"
                        in2="turbulence1"
                        scale="0"
                        xChannelSelector="R"
                        yChannelSelector="B"
                        result="displacementMap3"
                    />
                </filter>
                <g>
                    <image
                        href={image}
                        x="0"
                        y="0"
                        width="600"
                        height="750"
                        filter="url(#imgFilter)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </g>
            </svg>
            <div className="absolute bottom-[1.2em] left-[1em] text-white font-orbitron text-[2.5rem] font-black leading-[1.5em] first-line:text-[6rem]">
                {children}
            </div>
        </div>
    );
};

export default DecayCard;
