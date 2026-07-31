'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';
import resources from '../data/resources.json';
import DownloadCategory from './DownloadCategory';
import { CATEGORIES } from './Download.utils';

export default function Resources() {
    const [openCategory, setOpenCategory] = useState<string | null>('Rekaman');

    const toggleCategory = (category: string) => {
        setOpenCategory((prev) => (prev === category ? null : category));
    };

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
                Pusat dokumen resmi DevCamp yang menyediakan panduan peserta, petunjuk teknis, timeline kegiatan, virtual background, serta rekaman dan modul kelas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                {resources.map((item) => {
                    const isInternal = item.fileUrl.startsWith('/');
                    return (
                        <div
                            key={item.id}
                            className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-6 hover:border-[#2E53B0] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-orbitron font-bold text-lg text-white mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-xs leading-relaxed mb-6 font-sans">
                                    {item.description}
                                </p>
                            </div>

                            {isInternal && !item.fileUrl.match(/\.(png|jpg|jpeg|webp|pdf|zip)$/i) ? (
                                <Link
                                    href={item.fileUrl}
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-2.5 px-3 rounded-lg text-xs md:text-sm transition-colors text-center"
                                >
                                    {item.buttonLabel}
                                </Link>
                            ) : (
                                <a
                                    href={item.fileUrl}
                                    download={item.fileUrl.match(/\.(png|jpg|jpeg|webp|pdf|zip)$/i) ? true : undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-2.5 px-3 rounded-lg text-xs md:text-sm transition-colors text-center"
                                >
                                    {item.buttonLabel}
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Accordion List untuk Modul, Rekaman, dan Materi */}
            <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800">
                <h3 className="font-orbitron font-bold text-2xl text-white text-center mb-8">
                    📚 Rekaman Kelas, Modul & Materi
                </h3>
                {CATEGORIES.map((category) => (
                    <DownloadCategory
                        key={category}
                        category={category}
                        isOpen={openCategory === category}
                        onToggle={toggleCategory}
                    />
                ))}
            </div>
        </div>
    );
}
