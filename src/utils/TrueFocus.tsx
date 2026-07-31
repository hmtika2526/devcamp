import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
    sentence: string;
    className?: string;
    borderColor?: string;
    glowColor?: string;
}

function TrueFocus({
    sentence,
    className = "",
    borderColor = "#2E53B0",
    glowColor = "rgba(46, 83, 176, 0.6)",
}: TrueFocusProps) {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        const active = wordRefs.current[currentIndex];
        const container = containerRef.current;
        if (!active || !container) return;

        const parentRect = container.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex]);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {words.map((word, index) => (
                <span
                    key={index}
                    ref={(el) => {
                        wordRefs.current[index] = el;
                    }}
                    style={{
                        filter: index === currentIndex ? "blur(0px)" : "blur(3px)",
                        transition: "filter 0.4s ease",
                    }}
                >
                    {word}
                </span>
            ))}

            <motion.div
                className="absolute top-0 left-0 pointer-events-none"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: 1,
                }}
                transition={{ duration: 0.4 }}
                style={{
                    border: `2px solid ${borderColor}`,
                    boxShadow: `0 0 8px ${glowColor}`,
                }}
            />
        </div>
    );
}

export default TrueFocus;
