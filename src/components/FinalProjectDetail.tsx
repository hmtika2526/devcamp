'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';

export default function FinalProjectDetail() {
    const [activeTab, setActiveTab] = useState<'pengantar'>('pengantar');

    const detailDocUrl = "https://docs.google.com/document/d/19cvyScfybls4N0lq4oxD_1Zn_jiu3lf4/edit?usp=sharing&ouid=109895538476905398633&rtpof=true&sd=true";
    const themeDocUrl = "https://docs.google.com/document/d/1YIQjGdevvOujH8YzGHjzqkjOnWn5DI0i/edit?usp=sharing&ouid=109895538476905398633&rtpof=true&sd=true";
    const submitFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdn9kXbg6rfKoV6FdL02vII1aoDiNvA6E_lhVxN-bG45-4IAw/viewform?usp=dialog";
    const submitVideoUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdn9kXbg6rfKoV6FdL02vII1aoDiNvA6E_lhVxN-bG45-4IAw/viewform?usp=dialog";

    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-10">
                <span className="bg-[#2E53B0]/20 text-[#2E53B0] border border-[#2E53B0]/50 font-orbitron text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
                    Panduan & Kriteria Submission
                </span>

                <ScrollFloat
                    containerClassName="font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-2"
                    textClassName=""
                    animationDuration={1}
                    stagger={0.03}
                    ease="back.inOut(2)"
                >
                    FINAL PROJECT
                </ScrollFloat>

                <h2 className="text-blue-400 font-orbitron font-bold text-xl md:text-2xl tracking-wide uppercase mb-3">
                    DevCamp Batch 2
                </h2>

                <p className="text-gray-300 font-sans max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                    Pusat instruksi resmi, akses dokumen penjelasan kriteria, dokumen pilihan tema, serta portal pengumpulan berkas &amp; video presentasi Final Project.
                </p>
            </div>

            {/* Single Navigation Tab: Pengantar */}
            <div className="flex items-center justify-center mb-8 bg-[#171a26] p-2 rounded-2xl border border-gray-800 sticky top-[80px] z-20 backdrop-blur-md bg-opacity-90 max-w-xs mx-auto">
                <button
                    onClick={() => setActiveTab('pengantar')}
                    className="w-full py-3 px-6 rounded-xl font-orbitron text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-[#2E53B0] text-white shadow-lg shadow-blue-500/25 border border-blue-400/50 uppercase"
                >
                    <span>📌</span> Pengantar
                </button>
            </div>

            {/* Main Content Card */}
            <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(46,83,176,0.15)] min-h-[400px]">
                
                {activeTab === 'pengantar' && (
                    <div className="space-y-8 animate-fadeIn font-sans text-gray-300">
                        
                        {/* Quick Summary Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">⏰</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Deadline</span>
                                    <span className="text-white text-sm font-orbitron font-bold">30 Agustus 2026 (23:59 WIB)</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Project Level</span>
                                    <span className="text-white text-sm font-orbitron font-bold">Full Web Project</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">🎬</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Komponen Pengumpulan</span>
                                    <span className="text-white text-sm font-orbitron font-bold">Berkas &amp; Video Presentasi</span>
                                </div>
                            </div>
                        </div>

                        {/* Pengantar Text */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">💡</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Pengantar Final Project</h3>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-gray-200">
                                Selamat datang di tahap pengerjaan <strong className="text-white">Final Project DevCamp Batch 2</strong>. Peserta diharapkan untuk membaca seluruh dokumen panduan penjelasan, kriteria teknis, serta memilih salah satu topik tema yang telah disediakan pada dokumen resmi di bawah ini:
                            </p>
                        </div>

                        {/* Document Access Cards Section */}
                        <div className="space-y-4">
                            <h3 className="font-orbitron font-bold text-xl text-white flex items-center gap-2">
                                <span>📚</span> Dokumen Akses Resmi Final Project
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1: Penjelasan & Kriteria */}
                                <div className="bg-[#171a26] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#2E53B0]/70 transition-all duration-300">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-[#2E53B0] text-white p-2.5 rounded-xl text-xl">📄</span>
                                            <div>
                                                <h4 className="font-orbitron font-bold text-white text-base">Dokumen Penjelasan &amp; Kriteria</h4>
                                                <span className="text-xs text-blue-400 font-orbitron">Google Docs Official</span>
                                            </div>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                                            Berisi penjelasan lengkap, kriteria teknis pengerjaan, spesifikasi fitur wajib, rubrik penilaian, dan mekanisme penyelesaian Final Project.
                                        </p>
                                    </div>

                                    <a
                                        href={detailDocUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-xl text-xs md:text-sm transition-colors text-center uppercase shadow-md"
                                    >
                                        <span>Buka Dokumen Kriteria</span>
                                        <span>↗️</span>
                                    </a>
                                </div>

                                {/* Card 2: Pilihan Tema */}
                                <div className="bg-[#171a26] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#2E53B0]/70 transition-all duration-300">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-[#2E53B0] text-white p-2.5 rounded-xl text-xl">🎨</span>
                                            <div>
                                                <h4 className="font-orbitron font-bold text-white text-base">Dokumen Tema Final Project</h4>
                                                <span className="text-xs text-blue-400 font-orbitron">Google Docs Official</span>
                                            </div>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                                            Berisi daftar pilihan tema dan topik resmi yang dapat dipilih oleh peserta sebagai dasar ide pengembangan aplikasi web Final Project.
                                        </p>
                                    </div>

                                    <a
                                        href={themeDocUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-xl text-xs md:text-sm transition-colors text-center uppercase shadow-md"
                                    >
                                        <span>Buka Dokumen Tema</span>
                                        <span>↗️</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Submission Cards Section */}
                        <div className="space-y-4 pt-4 border-t border-gray-800">
                            <h3 className="font-orbitron font-bold text-xl text-white flex items-center gap-2">
                                <span>📤</span> Portal Pengumpulan Final Project
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1: Pengumpulan Berkas */}
                                <div className="bg-[#171a26] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#2E53B0]/70 transition-all duration-300">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-[#2E53B0] text-white p-2.5 rounded-xl text-xl">📦</span>
                                            <div>
                                                <h4 className="font-orbitron font-bold text-white text-base">Pengumpulan Berkas Project</h4>
                                                <span className="text-xs text-blue-400 font-orbitron">Google Form Official</span>
                                            </div>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                                            Formulir pengumpulan berkas web aplikasi, link repositori GitHub, link live demo, dan laporan dokumentasi Final Project.
                                        </p>
                                    </div>

                                    <a
                                        href={submitFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-xl text-xs md:text-sm transition-colors text-center uppercase shadow-md"
                                    >
                                        <span>Pengumpulan Berkas Project</span>
                                        <span>📤</span>
                                    </a>
                                </div>

                                {/* Card 2: Pengumpulan Video Presentasi */}
                                <div className="bg-[#171a26] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#2E53B0]/70 transition-all duration-300">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-[#2E53B0] text-white p-2.5 rounded-xl text-xl">🎬</span>
                                            <div>
                                                <h4 className="font-orbitron font-bold text-white text-base">Pengumpulan Video Presentasi</h4>
                                                <span className="text-xs text-blue-400 font-orbitron">Google Form Official</span>
                                            </div>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                                            Formulir pengumpulan rekaman video presentasi &amp; penjelasan demo fitur karya Final Project yang telah diunggah oleh peserta.
                                        </p>
                                    </div>

                                    <a
                                        href={submitVideoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-xl text-xs md:text-sm transition-colors text-center uppercase shadow-md"
                                    >
                                        <span>Pengumpulan Video Presentasi</span>
                                        <span>🎬</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-gray-800 flex items-center justify-start mt-8">
                    <Link
                        href="/assignment"
                        className="inline-flex items-center justify-center gap-2 bg-[#22262E] hover:bg-[#2c323f] border border-gray-700 text-white font-orbitron font-bold py-3.5 px-6 rounded-xl text-sm transition-colors"
                    >
                        <span>⬅️</span>
                        <span>Kembali ke Task Submission</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
