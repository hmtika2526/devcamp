import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";


type KeyframeValue = string | number;

function buildKeyframes(
    from: Partial<{ filter: KeyframeValue; opacity: KeyframeValue; y: KeyframeValue }>,
    steps: Array<Partial<{ filter: KeyframeValue; opacity: KeyframeValue; y: KeyframeValue }>>
): Partial<{ filter: KeyframeValue[]; opacity: KeyframeValue[]; y: KeyframeValue[] }> {
    const keys = new Set([...Object.keys(from), ...steps.flatMap(Object.keys)]);
    const keyframes: Record<string, KeyframeValue[]> = {};
    keys.forEach((k) => {
        keyframes[k as keyof typeof from] = [
            from[k as keyof typeof from]!,
            ...steps.map((s) => s[k as keyof typeof s]!)
        ];

    });
    return keyframes;
}


function BlurText({
    text = '',
    delay = 150,
    className = '',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = (t: number) => t,
    stepDuration = 0.35,
}: {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'chars';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Partial<{ filter: string; opacity: number; y: number }>
    animationTo?: Array<Partial<{ filter: string; opacity: number; y: number }>>
    easing?: (t: number) => number;
    stepDuration?: number;
}) {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const defaultFrom = useMemo(
        () =>
            direction === 'top'
                ? { filter: 'blur(10px)', opacity: 0, y: -50 }
                : { filter: 'blur(10px)', opacity: 0, y: 50 },
        [direction]
    );

    const defaultTo = useMemo(
        () => [
            { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
            { filter: 'blur(0px)', opacity: 1, y: 0 },
        ],
        [direction]
    );

    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;
    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({ length: stepCount }, (_, i) =>
        stepCount === 1 ? 0 : i / (stepCount - 1)
    );

    return (
        <p ref={ref} className={`${className} flex flex-wrap`}>
            {elements.map((segment, index) => {
                const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
                const spanTransition = {
                    duration: totalDuration,
                    times,
                    delay: (index * delay) / 1000,
                    ease: easing,
                };

                return (
                    <motion.span
                        key={index}
                        className="inline-block will-change-[transform,filter,opacity]"
                        initial={fromSnapshot}
                        animate={inView ? animateKeyframes : fromSnapshot}
                        transition={spanTransition}
                    >
                        {segment === ' ' ? '\u00A0' : segment}
                        {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
                    </motion.span>
                );
            })}
        </p>
    );
}

export default BlurText;
