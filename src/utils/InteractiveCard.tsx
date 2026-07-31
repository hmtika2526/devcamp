'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

const InteractiveCard: React.FC = () => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const displacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);
    const cursor = useRef({ x: 0, y: 0 });
    const cached = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            cursor.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMove);

        const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
        const map = (x: number, a: number, b: number, c: number, d: number) =>
            ((x - a) * (d - c)) / (b - a) + c;
        const dist = (x1: number, y1: number, x2: number, y2: number) =>
            Math.hypot(x1 - x2, y1 - y2);

        const state = {
            x: 0,
            y: 0,
            rz: 0,
            scale: 0,
        };

        const animate = () => {
            const { innerWidth, innerHeight } = window;
            state.x = lerp(state.x, map(cursor.current.x, 0, innerWidth, -80, 80), 0.07);
            state.y = lerp(state.y, map(cursor.current.y, 0, innerHeight, -80, 80), 0.07);
            state.rz = lerp(state.rz, map(cursor.current.x, 0, innerWidth, -8, 8), 0.07);

            if (cardRef.current) {
                gsap.set(cardRef.current, {
                    x: state.x,
                    y: state.y,
                    rotateZ: state.rz,
                });
            }

            const moved = dist(cursor.current.x, cursor.current.y, cached.current.x, cached.current.y);
            state.scale = lerp(state.scale, map(moved, 0, 200, 0, 400), 0.05);

            if (displacementMapRef.current) {
                gsap.set(displacementMapRef.current, {
                    attr: { scale: state.scale },
                });
            }

            cached.current = { ...cursor.current };
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMove);
        };
    }, []);

    return (
        <div className="relative w-full sm:w-[100%] backdrop-blur-lg px-6 py-8 border border-white/20 rounded-xl shadow-md hover:shadow-lg overflow-hidden">
            {/* Filter SVG background */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
                <filter id="bgFilter">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0.01"
                        numOctaves="5"
                        seed="4"
                        result="turbulence1"
                    />
                    <feDisplacementMap
                        ref={displacementMapRef}
                        in="SourceGraphic"
                        in2="turbulence1"
                        scale="0"
                        xChannelSelector="R"
                        yChannelSelector="B"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#bgFilter)" fill="#171a26" />
            </svg>

            {/* Animated card content */}
            <div ref={cardRef} className="transition-all duration-300">
                <div className="mb-4 text-3xl text-white">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                <h3 className="text-white text-xl font-bold font-orbitron">
                    Learning From The Instructor
                </h3>
                <p className="text-white/80 text-sm mt-2">
                    Gain direct guidance from expert mentors who walk you through every key stage—
                    from creative ideation to code deployment.
                </p>
            </div>
        </div>
    );
};

export default InteractiveCard;
