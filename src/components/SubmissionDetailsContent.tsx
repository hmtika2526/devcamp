"use client";

import React from 'react';
import { useParams } from "next/navigation";
import submissionData from "@/data/submission.json";
import { SubmissionData } from './SubmissionDetails.types';
import CapstoneSubmission from './CapstoneSubmission';
import RegularSubmission from './RegularSubmission';
import SubmissionNotFound from './SubmissionDetailsNotFound';

export default function SubmissionContent() {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name as string);
    const submission = submissionData.find((item) => item.name === decodedName) as SubmissionData | undefined;

    if (!submission) {
        return <SubmissionNotFound />;
    }

    if (submission.name === "capstone-submission") {
        return <CapstoneSubmission submission={submission} />;
    }

    return <RegularSubmission submission={submission} />;
}