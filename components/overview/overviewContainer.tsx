'use client'

import { useIndex } from "@/hooks/useIndex";
import { ReactNode, useEffect, useRef, HTMLAttributes } from "react";

interface OverviewContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    children: ReactNode;
    title: string;
    threshold?: number;
}

export default function OverviewContainer({ children, title, threshold = 0.5, ...divProps }: OverviewContainerProps) {
    const { setIndex, freeze } = useIndex();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !freeze && entry.intersectionRatio >= threshold) {
                    setIndex(title)
                }
            });
        }, {
            threshold: threshold
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [title, setIndex, freeze, threshold])

    return (
        <div id={title} ref={ref} {...divProps}>
            {children}
        </div>
    )
}