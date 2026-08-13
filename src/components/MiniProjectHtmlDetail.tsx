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

                <p className="text-gray-300 font-sans max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                    Petunjuk lengkap deskripsi project, pilihan studi kasus, serta 6 kriteria teknis wajib Mini Project 2 HTML DevCamp HMTIKA Batch 2.
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
                                    <span className="text-white text-sm font-orbitron font-bold">16 Agustus 2026 (23:59 WIB)</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">💻</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Bahasa Utama</span>
                                    <span className="text-white text-sm font-orbitron font-bold">HTML5 (Pure Structure)</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Studi Kasus</span>
                                    <span className="text-white text-sm font-orbitron font-bold">Pilih 1 dari 3 Topik</span>
                                </div>
                            </div>
                        </div>

                        {/* Deskripsi */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">💡</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Deskripsi Project</h3>
                            </div>

                            <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-6">
                                Pilih salah satu studi kasus (<strong className="text-white">Webinar Event</strong> / <strong className="text-white">Cafe Catalog</strong> / <strong className="text-white">Jasa Tech</strong>), lalu buat struktur HTML-nya!
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                                    <span className="text-2xl">🎟️</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm">1. Webinar Event</h4>
                                        <p className="text-xs text-gray-400 mt-1">Landing page pendaftaran webinar / event seminar tech.</p>
                                    </div>
                                </div>

                                <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                                    <span className="text-2xl">☕</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm">2. Cafe Catalog</h4>
                                        <p className="text-xs text-gray-400 mt-1">Landing page daftar produk &amp; katalog menu cafe / resto.</p>
                                    </div>
                                </div>

                                <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                                    <span className="text-2xl">💻</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm">3. Jasa Tech</h4>
                                        <p className="text-xs text-gray-400 mt-1">Landing page penawaran layanan / jasa software agency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kriteria Wajib (Technical Checklist) */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📋</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Kriteria Wajib (Technical Checklist)</h3>
                            </div>

                            <div className="space-y-5">
                                {/* Poin 1 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 border-l-4 border-blue-500 flex items-start gap-4">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md shrink-0 mt-0.5">1</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-base mb-1.5">
                                            Semantic HTML Full
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 mb-2.5 leading-relaxed">
                                            Wajib menggunakan struktur tag HTML5 Semantic secara lengkap:
                                        </p>
                                        <div className="flex flex-wrap gap-2 font-mono text-xs text-blue-300">
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;header&gt;</span>
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;nav&gt;</span>
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;main&gt;</span>
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;section&gt;</span>
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;article&gt;</span>
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;aside&gt;</span>
                                            <span className="bg-[#171a26] px-2.5 py-1 rounded-lg border border-gray-700">&lt;footer&gt;</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Poin 2 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 border-l-4 border-indigo-500 flex items-start gap-4">
                                    <span className="bg-indigo-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md shrink-0 mt-0.5">2</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-base mb-1">
                                            Navigasi &amp; Anchor Link
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                            Menu navigasi yang bisa melompat ke section terkait menggunakan link anchor (<code className="text-yellow-300 font-mono">href=&quot;#id-section&quot;</code>).
                                        </p>
                                    </div>
                                </div>

                                {/* Poin 3 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 border-l-4 border-purple-500 flex items-start gap-4">
                                    <span className="bg-purple-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md shrink-0 mt-0.5">3</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-base mb-1.5">
                                            Pricing / Agenda Table
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 mb-2 leading-relaxed">
                                            Wajib memiliki 1 tabel HTML (<code className="text-yellow-300 font-mono">&lt;table&gt;</code>) yang rapi menggunakan komponen tag:
                                        </p>
                                        <div className="flex flex-wrap gap-2 font-mono text-xs text-purple-300">
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;thead&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;tbody&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;th&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;tr&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;td&gt;</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Poin 4 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 border-l-4 border-teal-500 flex items-start gap-4">
                                    <span className="bg-teal-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md shrink-0 mt-0.5">4</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-base mb-1">
                                            FAQ Section (Elemen Interaktif)
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                            Gunakan tag interaktif <code className="text-yellow-300 font-mono">&lt;details&gt;</code> &amp; <code className="text-yellow-300 font-mono">&lt;summary&gt;</code> minimal untuk 3 pertanyaan umum (FAQ).
                                        </p>
                                    </div>
                                </div>

                                {/* Poin 5 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 border-l-4 border-amber-500 flex items-start gap-4">
                                    <span className="bg-amber-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md shrink-0 mt-0.5">5</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-base mb-1.5">
                                            Form Pendaftaran / Kontak yang Kaya Validasi
                                        </h4>
                                        <ul className="text-xs md:text-sm text-gray-300 space-y-2 font-sans">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-400 font-bold">a.</span>
                                                <span>Minimal 4 jenis input (Nama, Email, Tanggal, Pilihan Paket via <code className="text-yellow-300 font-mono">&lt;select&gt;</code> atau <code className="text-yellow-300 font-mono">radio</code>).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-400 font-bold">b.</span>
                                                <span>Wajib menggunakan atribut <code className="text-yellow-300 font-mono">&apos;required&apos;</code> dan <code className="text-yellow-300 font-mono">&apos;placeholder&apos;</code>.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Poin 6 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 border-l-4 border-rose-500 flex items-start gap-4">
                                    <span className="bg-rose-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md shrink-0 mt-0.5">6</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-base mb-1.5">
                                            Embedded Media
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 mb-2 leading-relaxed">
                                            Wajib ada minimal 1 gambar (<code className="text-yellow-300 font-mono">&lt;img&gt;</code>) dengan atribut <code className="text-yellow-300 font-mono">&apos;alt&apos;</code>.
                                        </p>
                                        <div className="bg-[#2E53B0]/20 border border-blue-500/30 p-3 rounded-lg text-xs text-blue-300 font-orbitron flex items-center gap-2">
                                            <span className="text-base">⭐</span>
                                            <span><strong className="text-white">Nilai Tambah:</strong> Penggunaan video (<code className="text-yellow-300 font-mono">&lt;video&gt;</code> / <code className="text-yellow-300 font-mono">&lt;iframe&gt;</code> Youtube) atau embed Google Maps akan menambah penilaian.</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
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
