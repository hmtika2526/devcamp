"use client";

import React from "react";
import "../assets/css/style.css";

import capstoneSubmitData from "../data/capstoneSubmit.json";

export default function SubmissionCapstone() {
    const submission = capstoneSubmitData[0]; // Ambil data pertama
    const totalSubmissions = submission.list_submision.length;
    const half = Math.ceil(totalSubmissions / 2);

    const LeftSubmissions = submission.list_submision.slice(0, half);
    const RightSubmissions = submission.list_submision.slice(half);

    // Gabungkan ke dalam array
    const DisplaySubmission = [LeftSubmissions, RightSubmissions];



    return (
        <div className="mt-[100px] px-4 md:px-20">
            <div className="bg-gradient-to-br from-[#1f1f2e] via-[#2b2b40] to-[#1f1f2e] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#ffffff]/10">

                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-[#ffffff]">
                    {submission.title}
                </h2>
                <p className="text-center text-[#ffffff] mb-3 text-2xl">
                    {submission.tagline}
                </p>
                <p className="text-center text-[#ffffff]/70 mb-6">
                    Last Update: {submission.last_update}
                </p>

                {/* List Submissions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                    {DisplaySubmission.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-3">
                            {group.map((item, index) => (
                                <li
                                    key={item.id_submission}
                                    className="flex flex-col gap-1 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition rounded-xl px-4 py-3 list-none"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-[#ffffff] font-bold">
                                            {groupIndex * half + index + 1}
                                        </span>
                                        <span className="text-[#ffffff] font-semibold">{item.nama}</span>
                                    </div>
                                    <div className="text-[#ffffff]/80 font-semibold ps-10">
                                        <div className="block">
                                            <span className="mb-2">Submit: {item.submit_date} </span>
                                            [<span className="mb-2 text-green-500">{item.submit_status}</span>]
                                        </div>
                                        {submission.status === "Locked" && (
                                            <span className="text-red-400 font-semibold">🔒 Locked</span>
                                        )}
                                        {submission.status === "Open" && (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white-400 font-semibold bg-[#2e53b0] text-white text-sm py-1 px-3 rounded-xl hover:bg-blue-600 transition cursor-pointer"
                                            >
                                                🌐 Kunjungi Website
                                            </a>
                                        )}

                                    </div>
                                </li>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
