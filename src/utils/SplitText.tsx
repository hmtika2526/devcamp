import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

interface SplitTextProps {
    text: string;
    className?: string;
}

function SplitText({ text, className }: SplitTextProps) {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const splitter = new GSAPSplitText(el, { type: "chars" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true,
            },
        });

        tl.from(splitter.chars, {
            opacity: 0,
            y: 40,
            stagger: 0.05,
            ease: "power3.out",
        });

        return () => {
            splitter.revert();
            tl.kill();
        };
    }, []);

    return (
        <h1 ref={ref} className={className}>
            {text}
        </h1>
    );
}

export default SplitText;
