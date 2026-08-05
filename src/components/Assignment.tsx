'use client';

import React from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';
import assignments from '../data/assignments.json';

export default function Assignment() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                ASSIGNMENT
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Pusat pengumpulan seluruh tugas DevCamp (Mini Project, Final Project, & Abstrak Karya).
            </p>

            {assignments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {assignments.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1e1e2f] border border-[#2E53B0] rounded-xl p-6 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 shadow-md"
                        >
                            <div>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                                    {item.type}
                                </span>

                                <h3 className="font-orbitron font-bold text-lg text-white mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed mb-4 font-sans">
                                    {item.description}
                                </p>

                                <div className="bg-[#22262E] p-3 rounded-lg text-xs font-orbitron text-gray-300 mb-6">
                                    ⏰ <span className="font-bold text-white">Deadline:</span><br />{item.deadline}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                {item.detailUrl && (
                                    item.detailUrl.startsWith('/') ? (
                                        <Link
                                            href={item.detailUrl}
                                            className="inline-flex items-center justify-center gap-2 w-full bg-[#22262E] hover:bg-[#2c323f] border border-gray-700 text-white font-orbitron font-bold py-2.5 px-3 rounded-lg text-xs md:text-sm transition-colors text-center uppercase"
                                        >
                                            📄 Detail Mini Project
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.detailUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full bg-[#22262E] hover:bg-[#2c323f] border border-gray-700 text-white font-orbitron font-bold py-2.5 px-3 rounded-lg text-xs md:text-sm transition-colors text-center uppercase"
                                        >
                                            📄 Detail Mini Project
                                        </a>
                                    )
                                )}
                                {item.submitUrl && (
                                    <a
                                        href={item.submitUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-2.5 px-4 rounded-lg text-xs md:text-sm transition-colors text-center uppercase"
                                    >
                                        📤 Pengumpulan Mini Project
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-2xl mx-auto bg-[#1e1e2f] border border-gray-800 rounded-2xl p-12 text-center shadow-xl">
                    <div className="text-5xl mb-4">📭</div>
                    <h3 className="font-orbitron font-bold text-xl text-white mb-2">Belum Ada Tugas Aktif</h3>
                    <p className="text-gray-400 font-sans text-sm max-w-md mx-auto">
                        Saat ini belum ada tugas pengumpulan yang dibuka. Silakan cek kembali secara berkala sesuai timeline kegiatan!
                    </p>
                </div>
            )}
        </div>
    );
}
