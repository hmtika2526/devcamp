'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';

export default function MiniProjectHtmlDetail() {
    const [activeTab, setActiveTab] = useState<'pengantar'>('pengantar');

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
                    MINI PROJECT DEVCAMP
                </ScrollFloat>

                <h2 className="text-blue-400 font-orbitron font-bold text-xl md:text-2xl tracking-wide uppercase mb-3">
                    HTML LANDING PAGE CHALLENGE
                </h2>
            </div>

            {/* Single Navigation Tab: Pengantar */}
            <div className="flex items-center justify-center mb-8 bg-[#171a26] p-2 rounded-2xl border border-gray-800 sticky top-[80px] z-20 backdrop-blur-md bg-opacity-90 max-w-xs mx-auto">
                <button
                    onClick={() => setActiveTab('pengantar')}
                    className="w-full py-3 px-6 rounded-xl font-orbitron text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-[#2E53B0] text-white shadow-lg shadow-blue-500/25 border border-blue-400/50"
                >
                    <span>📌</span> Pengantar
                </button>
            </div>

            {/* Main Content Area */}
            <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(46,83,176,0.15)] min-h-[400px]">
                
                {activeTab === 'pengantar' && (
                    <div className="space-y-8 animate-fadeIn font-sans text-gray-300">
                        {/* Quick Summary Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">⏰</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Deadline</span>
                                    <span className="text-white text-sm font-orbitron font-bold">16 Agustus 2026 (23:59 WIB)</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">💻</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Project</span>
                                    <span className="text-white text-sm font-orbitron font-bold">HTML Landing Page Challenge</span>
                                </div>
                            </div>
                        </div>

                        {/* Deskripsi */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <h3 className="font-orbitron font-bold text-xl text-white mb-3 flex items-center gap-2 pb-3 border-b border-gray-800">
                                <span>💡</span> Deskripsi:
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-gray-200">
                                Pilih salah satu studi kasus (Webinar Event / Cafe Catalog / Jasa Tech), lalu buat struktur HTML-nya!
                            </p>
                        </div>

                        {/* Kriteria Wajib (Technical Checklist) */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <h3 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2 pb-3 border-b border-gray-800">
                                <span>📋</span> Kriteria Wajib (Technical Checklist):
                            </h3>

                            <ol className="space-y-4 text-sm md:text-base text-gray-200 list-decimal list-inside">
                                <li className="leading-relaxed">
                                    <strong>Semantic HTML Full:</strong> <code className="text-blue-400 font-mono">&lt;header&gt;</code>, <code className="text-blue-400 font-mono">&lt;nav&gt;</code>, <code className="text-blue-400 font-mono">&lt;main&gt;</code>, <code className="text-blue-400 font-mono">&lt;section&gt;</code>, <code className="text-blue-400 font-mono">&lt;article&gt;</code>, <code className="text-blue-400 font-mono">&lt;aside&gt;</code>, <code className="text-blue-400 font-mono">&lt;footer&gt;</code>.
                                </li>
                                <li className="leading-relaxed">
                                    <strong>Navigasi &amp; Anchor Link:</strong> Menu navigasi yang bisa melompat ke section terkait.
                                </li>
                                <li className="leading-relaxed">
                                    <strong>Pricing / Agenda Table:</strong> Wajib memiliki 1 tabel HTML (<code className="text-blue-400 font-mono">&lt;table&gt;</code>) yang rapi dengan <code className="text-blue-400 font-mono">&lt;thead&gt;</code>, <code className="text-blue-400 font-mono">&lt;tbody&gt;</code>, <code className="text-blue-400 font-mono">&lt;th&gt;</code>, <code className="text-blue-400 font-mono">&lt;tr&gt;</code>, dan <code className="text-blue-400 font-mono">&lt;td&gt;</code>.
                                </li>
                                <li className="leading-relaxed">
                                    <strong>FAQ Section (Elemen Interaktif):</strong> Gunakan tag <code className="text-blue-400 font-mono">&lt;details&gt;</code> &amp; <code className="text-blue-400 font-mono">&lt;summary&gt;</code> minimal untuk 3 pertanyaan umum.
                                </li>
                                <li className="leading-relaxed">
                                    <strong>Form pendaftaran/kontak yang kaya validasi:</strong>
                                    <ul className="list-alpha list-inside ml-6 mt-1.5 space-y-1 text-gray-300 text-sm">
                                        <li>Minimal 4 jenis input (Nama, Email, Tanggal, Pilihan Paket via <code className="text-yellow-300 font-mono">&lt;select&gt;</code> atau radio)</li>
                                        <li>Wajib menggunakan atribut &apos;required&apos; dan &apos;placeholder&apos;</li>
                                    </ul>
                                </li>
                                <li className="leading-relaxed">
                                    <strong>Embedded Media:</strong> Wajib ada minimal 1 gambar (<code className="text-blue-400 font-mono">&lt;img&gt;</code>) dengan atribut &apos;alt&apos;. Penggunaan video (<code className="text-blue-400 font-mono">&lt;video&gt;</code> / <code className="text-blue-400 font-mono">&lt;iframe&gt;</code> Youtube) atau embed Google Maps akan menambah penilaian.
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-4 items-center justify-between mt-8">
                    <Link
                        href="/assignment"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22262E] hover:bg-[#2c323f] border border-gray-700 text-white font-orbitron font-bold py-3.5 px-6 rounded-xl text-sm transition-colors"
                    >
                        <span>⬅️</span>
                        <span>Kembali ke Task Submission</span>
                    </Link>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScoDiL4vfQflyct_Ct-LSVy6OJxmaDz94SOOpEoDng0pSXqRA/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3.5 px-8 rounded-xl text-sm transition-colors uppercase text-center shadow-lg hover:shadow-blue-500/25"
                    >
                        <span>Pengumpulan Mini Project</span>
                        <span>📤</span>
                    </a>
                </div>

            </div>
        </div>
    );
}
