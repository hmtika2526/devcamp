"use client";

import React from "react";
import "../assets/css/style.css";

import CapstoneReward from "../data/CapstoneReward.json";

export default function RewardBestproject() {
    const SeniorCapstoneReward = CapstoneReward.filter(item => item.status == "capstone" && item.level === "Senior");
    const JuniorCapstoneReward = CapstoneReward.filter(item => item.status == "capstone" && item.level === "Junior");
    const Distinction = CapstoneReward.filter(item => item.status == "distinction");
    return (
        <div className="mt-[50px] px-4 md:px-20">
            <div className="bg-gradient-to-br from-[#1f1f2e] via-[#2b2b40] to-[#1f1f2e] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#ffffff]/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 pb-5 text-center text-[#ffffff]">
                    Junior Best Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
                    {JuniorCapstoneReward.map((item, index) => (
                        <div key={item.id} className="space-y-3 flex text-center flex-col gap-1 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition rounded-xl px-4 py-3 list-none"
                        >
                            <img src={`https://cdn.hmtika.web.id/images/devcamp/reward/jpg-compressed/${item.image}`} alt="" className="w-full rounded-xl" loading="lazy" />
                            <span className="flex items-center justify-center mx-auto w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#ffffff] font-bold">
                                {index + 1}
                            </span>
                            <span className="text-[#ffffff] font-semibold">{item.nama}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gradient-to-br mt-[50px] from-[#1f1f2e] via-[#2b2b40] to-[#1f1f2e] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#ffffff]/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 pb-5 text-center text-[#ffffff]">
                    Senior Best Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
                    {SeniorCapstoneReward.map((item, index) => (
                        <div key={item.id} className="space-y-3 flex text-center flex-col gap-1 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition rounded-xl px-4 py-3 list-none"
                        >
                            <img src={`https://cdn.hmtika.web.id/images/devcamp/reward/jpg-compressed/${item.image}`} alt="" className="w-full rounded-xl" loading="lazy" />
                            <span className="flex items-center justify-center mx-auto w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#ffffff] font-bold">
                                {index + 1}
                            </span>
                            <span className="text-[#ffffff] font-semibold">{item.nama}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="bg-gradient-to-br mt-[50px] from-[#1f1f2e] via-[#2b2b40] to-[#1f1f2e] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#ffffff]/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 pb-5 text-center text-[#ffffff]">
                    Distinction
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 place-items-center">
                    {Distinction.map((item, index) => (
                        <div
                            key={item.id}
                            className="space-y-3 flex text-center flex-col gap-1 bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition rounded-xl px-4 py-3 list-none"
                        >
                            <img src={item.image} alt="" className="w-full" />
                            <span className="text-[#ffffff] font-semibold">{item.nama}</span>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}
