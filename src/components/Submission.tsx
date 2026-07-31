"use client";

import React from "react";
import dynamic from "next/dynamic";

import "../assets/css/style.css";

import submissionData from "../data/submission.json";
import SubmissionHeader from "./SubmissionHeader";

import ScrollFloat from "../utils/ScrollFloat";
import Loading from "@/components/Loading"

const SubmissionCapstone = dynamic(() => import("./Submisson.capstone"), {
	loading: () => <Loading />,
	ssr: false,
});

const SubmissionTop10 = dynamic(() => import("./Submission.top10"), {
	loading: () => <Loading />,
	ssr: false,
});


export default function SubmissionIndex() {
	return (
		<div
			className="py-12 pt-[50px] container mx-auto text-white"
			id="submission"
		>
			<SubmissionHeader />



			{/* Daftar Submission */}
			<div className="mt-10 relative w-full px-4 md:px-20 mx-auto">
				{submissionData.map((item) => (
					<div key={item.id}>
						<div className="flex flex-col md:flex-row md:items-center mb-3 justify-start md:justify-between bg-[#1e1e2f] p-4 rounded-xl shadow-lg">
							<a
								href={`/submission/${encodeURIComponent(item.name)}`}
								rel="noopener noreferrer"
								className="text-white font-mono text-md mb-3 md:mb-0">{item.title}</a>

							{item.status === "Open" ? (
								<a
									href={`/submission/${encodeURIComponent(item.name)}`}
									rel="noopener noreferrer"
									className="text-center bg-[#2e53b0] text-white text-sm py-2 px-5 me-3 rounded-xl hover:bg-blue-600 transition"
								>
									VIEW DETAILS
								</a>
							) : item.status === "Closed" ? (
								<span className="text-center bg-[#1e1e2f] text-[#FFEB99] text-sm py-2 px-3 rounded-xl cursor-not-allowed select-none">
									LOCKED 🔒
								</span>
							) : (
								<a
									href={`/submission/${encodeURIComponent(item.name)}`}
									rel="noopener noreferrer"
									className="text-center bg-[#1e1e2f] border-[#2e53b0] border-2 text-[#FFEB99] text-sm py-2 px-3 rounded-xl">
									{item.status}
								</a>
							)}
						</div>
					</div>
				))}
			</div>

			<SubmissionCapstone />

			{/* Pengumuman Top 10 */}
			{/* <SubmissionTop10 /> */}
		</div>
	);
}
