import React from 'react';

interface SubmissionHeaderProps {
    title: string;
}

export default function SubmissionHeader({ title }: SubmissionHeaderProps) {
    return (
        <h1 className="text-2xl font-bold text-center text-[#ffffff] mb-8">
            {title}
        </h1>
    );
}