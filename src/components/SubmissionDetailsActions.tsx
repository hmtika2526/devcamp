import React from 'react';

interface SubmissionActionsProps {
    status: "Open" | "Closed";
    submissionUrl?: string;
}

export default function SubmissionActions({ status, submissionUrl }: SubmissionActionsProps) {
    if (status === "Open" && submissionUrl) {
        return (
            <a
                href={submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2e53b0] text-[#ffffff] text-lg py-3 w-full px-5 rounded-xl hover:bg-blue-600 transition block text-center"
            >
                SUBMIT
            </a>
        );
    }

    return (
        <p className="text-[#ffffff] text-center text-2xl">
            Status: {status}
        </p>
    );
}