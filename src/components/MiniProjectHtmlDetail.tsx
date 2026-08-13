'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';

export default function MiniProjectHtmlDetail() {
    const [activeTab, setActiveTab] = useState<'pengantar' | 'pengumpulan'>('pengantar');

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
                    MINI PROJECT 2
                </ScrollFloat>

                <h2 className="text-blue-400 font-orbitron font-bold text-xl md:text-2xl tracking-wide uppercase mb-3">
                    HTML Landing Page Challenge
                </h2>

                <p className="text-gray-300 font-sans max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                    Petunjuk lengkap deskripsi, kriteria wajib (technical checklist), serta mekanisme pengumpulan Mini Project HTML DevCamp HMTIKA Batch 2.
                </p>
            </div>

            {/* 2 Navigation Tabs */}
            <div className="flex items-center justify-center gap-3 mb-8 bg-[#171a26] p-2 rounded-2xl border border-gray-800 sticky top-[80px] z-20 backdrop-blur-md bg-opacity-90 max-w-md mx-auto">
                <button
                    onClick={() => setActiveTab('pengantar')}
                    className={`flex-1 py-3 px-6 rounded-xl font-orbitron text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        activeTab === 'pengantar'
                            ? 'bg-[#2E53B0] text-white shadow-lg shadow-blue-500/25 border border-blue-400/50'
                            : 'bg-[#1e1e2f] text-gray-400 hover:text-white hover:bg-[#28283f] border border-transparent'
                    }`}
                >
                    <span>📌</span> Deskripsi & Kriteria
                </button>

                <button
                    onClick={() => setActiveTab('pengumpulan')}
                    className={`flex-1 py-3 px-6 rounded-xl font-orbitron text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        activeTab === 'pengumpulan'
                            ? 'bg-[#2E53B0] text-white shadow-lg shadow-blue-500/25 border border-blue-400/50'
                            : 'bg-[#1e1e2f] text-gray-400 hover:text-white hover:bg-[#28283f] border border-transparent'
                    }`}
                >
                    <span>📤</span> Pengumpulan
                </button>
            </div>

            {/* Main Content Area */}
            <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(46,83,176,0.15)] min-h-[400px]">
                
                {/* TAB 1: DESKRIPSI & KRITERIA WAJIB */}
                {activeTab === 'pengantar' && (
                    <div className="space-y-8 animate-fadeIn">
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
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Tipe Project</span>
                                    <span className="text-white text-sm font-orbitron font-bold">HTML Landing Page</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Pilihan Studi Kasus</span>
                                    <span className="text-white text-sm font-orbitron font-bold">Pilih 1 dari 3 Topik</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 1: Deskripsi & Studi Kasus */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">💡</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Deskripsi & Pilihan Studi Kasus</h3>
                            </div>

                            <div className="space-y-4 font-sans text-gray-300 text-sm md:text-base leading-relaxed">
                                <p>
                                    Pilih salah satu dari 3 studi kasus di bawah ini, lalu buat struktur <strong className="text-white">HTML lengkap</strong> yang rapi dan sesuai dengan standar Semantic HTML:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                                    <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800 text-center hover:border-blue-400/50 transition-colors">
                                        <span className="text-3xl block mb-2">🎟️</span>
                                        <h4 className="font-orbitron font-bold text-white text-sm mb-1">1. Webinar Event</h4>
                                        <p className="text-xs text-gray-400">Landing page pendaftaran webinar / seminar teknologi.</p>
                                    </div>

                                    <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800 text-center hover:border-blue-400/50 transition-colors">
                                        <span className="text-3xl block mb-2">☕</span>
                                        <h4 className="font-orbitron font-bold text-white text-sm mb-1">2. Cafe Catalog</h4>
                                        <p className="text-xs text-gray-400">Landing page katalog menu & daftar harga cafe / resto.</p>
                                    </div>

                                    <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800 text-center hover:border-blue-400/50 transition-colors">
                                        <span className="text-3xl block mb-2">💻</span>
                                        <h4 className="font-orbitron font-bold text-white text-sm mb-1">3. Jasa Tech</h4>
                                        <p className="text-xs text-gray-400">Landing page penawaran layanan / jasa software house.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Kriteria Wajib (Technical Checklist) */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📋</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Kriteria Wajib (Technical Checklist)</h3>
                            </div>

                            <div className="space-y-4 font-sans">
                                {/* 1. Semantic HTML */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-4 md:p-5 flex items-start gap-3">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md mt-0.5">1</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                                            Semantic HTML Full
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 mb-2">
                                            Wajib menggunakan struktur elemen HTML5 modern:
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-blue-300">
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;header&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;nav&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;main&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;section&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;article&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;aside&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;footer&gt;</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Navigasi & Anchor Link */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-4 md:p-5 flex items-start gap-3">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md mt-0.5">2</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                                            Navigasi & Anchor Link
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300">
                                            Menu navigasi yang bisa melompat ke section terkait menggunakan atribut <code className="text-yellow-300 font-mono">href=&quot;#id-section&quot;</code>.
                                        </p>
                                    </div>
                                </div>

                                {/* 3. Pricing / Agenda Table */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-4 md:p-5 flex items-start gap-3">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md mt-0.5">3</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                                            Pricing / Agenda Table
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 mb-2">
                                            Wajib memiliki minimal 1 tabel HTML (<code className="text-yellow-300 font-mono">&lt;table&gt;</code>) yang rapi menggunakan struktur tag:
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 font-mono text-xs text-blue-300">
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;thead&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;tbody&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;th&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;tr&gt;</span>
                                            <span className="bg-[#171a26] px-2 py-0.5 rounded border border-gray-700">&lt;td&gt;</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. FAQ Section */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-4 md:p-5 flex items-start gap-3">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md mt-0.5">4</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                                            FAQ Section (Elemen Interaktif)
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300">
                                            Gunakan tag interaktif bawaan HTML <code className="text-yellow-300 font-mono">&lt;details&gt;</code> &amp; <code className="text-yellow-300 font-mono">&lt;summary&gt;</code> minimal untuk 3 pertanyaan umum.
                                        </p>
                                    </div>
                                </div>

                                {/* 5. Form Pendaftaran/Kontak */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-4 md:p-5 flex items-start gap-3">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md mt-0.5">5</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                                            Form Pendaftaran / Kontak yang Kaya Validasi
                                        </h4>
                                        <ul className="text-xs md:text-sm text-gray-300 space-y-1.5 list-disc list-inside mt-1">
                                            <li>Minimal 4 jenis input (Nama, Email, Tanggal, Pilihan Paket via <code className="text-yellow-300 font-mono">&lt;select&gt;</code> atau radio).</li>
                                            <li>Wajib menggunakan atribut <code className="text-yellow-300 font-mono">required</code> dan <code className="text-yellow-300 font-mono">placeholder</code>.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 6. Embedded Media */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-4 md:p-5 flex items-start gap-3">
                                    <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md mt-0.5">6</span>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                                            Embedded Media
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-300 mb-2">
                                            Wajib ada minimal 1 gambar (<code className="text-yellow-300 font-mono">&lt;img&gt;</code>) dengan atribut <code className="text-yellow-300 font-mono">alt</code>.
                                        </p>
                                        <div className="bg-[#2E53B0]/20 border border-blue-500/30 p-2.5 rounded-lg text-xs text-blue-300 font-orbitron flex items-center gap-2">
                                            <span>⭐</span>
                                            <span><strong className="text-white">Poin Plus:</strong> Penggunaan video (<code className="text-yellow-300 font-mono">&lt;video&gt;</code> / <code className="text-yellow-300 font-mono">&lt;iframe&gt;</code> Youtube) atau embed Google Maps akan menambah penilaian.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: PENGUMPULAN */}
                {activeTab === 'pengumpulan' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
                            <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📤</span>
                            <div>
                                <h3 className="font-orbitron font-bold text-xl text-white">Mekanisme Pengumpulan</h3>
                                <p className="text-gray-400 font-sans text-xs">Petunjuk penyampaian berkas Mini Project 2 HTML</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                            <div className="bg-[#171a26] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-[#2E53B0] text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded">BERKAS TUGAS</span>
                                        <h4 className="font-orbitron font-bold text-base text-white">File HTML / Repositori GitHub</h4>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-3">Peserta mengumpulkan berkas pengerjaan HTML berupa:</p>
                                    <ul className="text-xs text-gray-300 space-y-2 list-disc list-inside bg-[#22262E] p-4 rounded-lg border border-gray-800">
                                        <li>Link Repositori GitHub / Link Vercel (jika di-deploy)</li>
                                        <li>Atau upload file ZIP proyek HTML pada form pengumpulan</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#171a26] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-[#2E53B0] text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded">FORMULIR</span>
                                        <h4 className="font-orbitron font-bold text-base text-white">Form Pengumpulan Resmi</h4>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-2">Pastikan pengumpulan dilakukan sebelum batas waktu:</p>
                                    <div className="bg-[#22262E] text-yellow-300 text-xs px-3 py-2 rounded-lg font-orbitron inline-block mb-3 border border-yellow-500/30">
                                        ⏰ 16 Agustus 2026 - 23:59 WIB
                                    </div>
                                    <p className="text-xs text-gray-400">Gunakan tombol pengumpulan di bawah untuk mengakses formulir Google Form resmi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer Actions inside Card */}
                <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-4 items-center justify-between mt-8">
                    <Link
                        href="/assignment"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22262E] hover:bg-[#2c323f] border border-gray-700 text-white font-orbitron font-bold py-3.5 px-6 rounded-xl text-sm transition-colors"
                    >
                        <span>⬅️</span>
                        <span>Kembali ke Task Submission</span>
                    </Link>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdn9kXbg6rfKoV6FdL02vII1aoDiNvA6E_lhVxN-bG45-4IAw/viewform?usp=dialog"
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
