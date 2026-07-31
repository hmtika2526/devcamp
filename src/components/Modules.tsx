'use client';

import React from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import modulesData from '../data/modules.json';

export default function Modules() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                MODULES
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Pusat materi pembelajaran resmi DevCamp HMTIKA.
            </p>

            <div className="max-w-3xl mx-auto">
                <div className="bg-[#1e1e2f] border border-[#2E53B0] rounded-xl p-8 md:p-10 shadow-[0_0_25px_rgba(46,83,176,0.2)] hover:shadow-[0_0_35px_rgba(46,83,176,0.35)] transition-all duration-300">
                    <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-white mb-4 flex items-center gap-3">
                        <span>📚</span> {modulesData.title.replace('📚 ', '')}
                    </h3>

                    <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 font-sans">
                        {modulesData.description}
                    </p>

                    <div className="bg-[#22262E] border border-gray-800 rounded-lg p-5 mb-6 space-y-4">
                        <span className="font-orbitron font-semibold text-sm text-blue-400 block uppercase tracking-wider">
                            Di dalamnya terdapat:
                        </span>

                        <div className="space-y-4">
                            {modulesData.modules.map((mod) => (
                                <div
                                    key={mod.id}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#1e1e2f] p-4 rounded-lg border border-gray-800 hover:border-[#2E53B0] transition-colors"
                                >
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#2E53B0] font-bold mt-0.5">•</span>
                                        <span className="font-sans text-gray-200 text-sm md:text-base font-medium">
                                            {mod.name}
                                        </span>
                                    </div>

                                    <a
                                        href={mod.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-2 px-4 rounded-lg text-xs md:text-sm transition-colors text-center"
                                    >
                                        <span>{mod.buttonLabel}</span>
                                        <span>➔</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans italic border-l-2 border-[#2E53B0] pl-4">
                        {modulesData.note}
                    </p>
                </div>
            </div>
        </div>
    );
}
