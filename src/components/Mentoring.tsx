'use client';

import React from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import mentoringData from '../data/mentoring.json';

export default function Mentoring() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                MENTORING GROUPS
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-8 text-sm md:text-base">
                {mentoringData.description}
            </p>

            {/* Grid Kelompok Mentoring */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                {mentoringData.groups.map((group) => (
                    <div
                        key={group.id}
                        className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-6 hover:border-[#2E53B0] transition-all duration-300 flex flex-col justify-between shadow-lg"
                    >
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
                                <h3 className="font-orbitron font-bold text-xl text-white">
                                    {group.groupName}
                                </h3>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-semibold px-2.5 py-1 rounded-md">
                                    {group.members.length} Peserta
                                </span>
                            </div>

                            <div className="bg-[#22262E] p-3 rounded-lg mb-4">
                                <span className="text-gray-400 font-orbitron text-xs font-bold block uppercase mb-1">
                                    👨‍🏫 Mentor Pendamping:
                                </span>
                                <span className="font-orbitron font-bold text-sm text-blue-400">
                                    {group.mentor}
                                </span>
                            </div>

                            <div>
                                <span className="text-gray-400 font-orbitron text-xs font-bold block uppercase mb-2">
                                    👥 Daftar Peserta:
                                </span>
                                <ul className="space-y-1.5 font-sans text-sm text-gray-300">
                                    {group.members.map((member, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="text-[#2E53B0] font-bold text-xs">{idx + 1}.</span>
                                            <span>{member}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {group.whatsappGroup && (
                            <a
                                href={group.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0]/80 hover:bg-[#2E53B0] text-white font-orbitron font-bold py-2.5 px-4 rounded-lg text-xs md:text-sm transition-colors text-center"
                            >
                                💬 Join Grup WA Kelompok
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <p className="text-center text-gray-400 text-xs md:text-sm leading-relaxed font-sans italic max-w-3xl mx-auto border-t border-gray-800 pt-6">
                * {mentoringData.note}
            </p>
        </div>
    );
}
