'use client';

import React from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';
import resources from '../data/resources.json';

export default function Resources() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                RESOURCES CENTER
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                Pusat dokumen resmi DevCamp yang menyediakan panduan peserta, petunjuk teknis, serta timeline kegiatan yang dapat diakses selama program berlangsung.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {resources.map((item) => {
                    const isInternal = item.fileUrl.startsWith('/');
                    return (
                        <div
                            key={item.id}
                            className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-6 hover:border-[#2E53B0] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-orbitron font-bold text-xl text-white mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                                    {item.description}
                                </p>
                            </div>

                            {isInternal ? (
                                <Link
                                    href={item.fileUrl}
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-lg text-sm transition-colors text-center"
                                >
                                    {item.buttonLabel}
                                </Link>
                            ) : (
                                <a
                                    href={item.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-lg text-sm transition-colors text-center"
                                >
                                    {item.buttonLabel}
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
