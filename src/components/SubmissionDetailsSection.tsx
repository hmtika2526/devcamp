import React from 'react';

interface SubmissionSectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    titleIcon?: string;
}

export default function SubmissionSection({
    title,
    children,
    className = "",
    titleIcon
}: SubmissionSectionProps) {
    return (
        <section className={`bg-[#1e1e2f] rounded-lg p-6 shadow-md ${className}`}>
            {title && (
                <h2 className="text-xl font-semibold text-[#ffffff] mb-4">
                    {titleIcon && <span className="mr-2">{titleIcon}</span>}
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}