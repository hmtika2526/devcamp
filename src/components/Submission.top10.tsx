"use client";

import React from "react";
import "../assets/css/style.css";

import top10Data from "../data/top10uiux.json";

export default function SubmissionTop10() {
    return (
        <div className="mt-10 px-4 md:px-20">
            <div className="bg-gradient-to-br from-[#1f1f2e] via-[#2b2b40] to-[#1f1f2e] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10">

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
                    {top10Data.title}
                </h2>

                {/* List Top 10 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Kolom kiri */}
                    <div className="space-y-3">
                        {top10Data.names.slice(0, 5).map((name, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-2 list-none"
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold">
                                    {index + 1}
                                </span>
                                <span className="text-white">{name}</span>
                            </li>
                        ))}
                    </div>

                    {/* Kolom kanan */}
                    <div className="space-y-3">
                        {top10Data.names.slice(5, 10).map((name, index) => (
                            <li
                                key={index + 5}
                                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-2 list-none"
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold">
                                    {index + 6}
                                </span>
                                <span className="text-white">{name}</span>
                            </li>
                        ))}
                    </div>
                </div>

                {/* Button */}
                {/* <div className="mt-8 text-center">
                    <a
                        href={"https://forms.gle/FKLsRF6D98tVmKYa8"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition"
                    >
                        📩 Kirim Data Diri
                    </a>
                </div> */}
            </div>
        </div>
    );
}
