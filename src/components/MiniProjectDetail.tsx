'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';

export default function MiniProjectDetail() {
    const [activeTab, setActiveTab] = useState<'pengantar' | 'rubrik'>('pengantar');

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
                    MINI PROJECT AKHIR
                </ScrollFloat>

                <h2 className="text-blue-400 font-orbitron font-bold text-xl md:text-2xl tracking-wide uppercase mb-3">
                    UI/UX Design with Figma
                </h2>

                <p className="text-gray-300 font-sans max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                    Petunjuk lengkap alur pengerjaan, ketentuan tugas, rubrik penilaian, serta berkas pengumpulan Mini Project Akhir DevCamp HMTIKA Batch 2.
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
                    <span>📌</span> Pengantar
                </button>

                <button
                    onClick={() => setActiveTab('rubrik')}
                    className={`flex-1 py-3 px-6 rounded-xl font-orbitron text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        activeTab === 'rubrik'
                            ? 'bg-[#2E53B0] text-white shadow-lg shadow-blue-500/25 border border-blue-400/50'
                            : 'bg-[#1e1e2f] text-gray-400 hover:text-white hover:bg-[#28283f] border border-transparent'
                    }`}
                >
                    <span>📊</span> Rubrik Penilaian
                </button>
            </div>

            {/* Main Content Area */}
            <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(46,83,176,0.15)] min-h-[400px]">
                
                {/* TAB 1: PENGANTAR (Memuat seluruh detail pengerjaan) */}
                {activeTab === 'pengantar' && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Quick Summary Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">⏰</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Deadline</span>
                                    <span className="text-white text-sm font-orbitron font-bold">9 Agustus 2026 (23:59 WIB)</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">👤</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Tipe Pengerjaan</span>
                                    <span className="text-white text-sm font-orbitron font-bold">Individu (Figma)</span>
                                </div>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                                <span className="text-2xl">📄</span>
                                <div>
                                    <span className="text-gray-400 text-xs font-orbitron block uppercase">Output Desain</span>
                                    <span className="text-white text-sm font-orbitron font-bold">Min. 2 Halaman Terhubung</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 1: Studi Kasus */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">💡</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Studi Kasus</h3>
                            </div>

                            <div className="space-y-4 font-sans text-gray-300 text-sm md:text-base leading-relaxed">
                                <p>
                                    Setiap peserta diminta melakukan proses <strong className="text-white">Design Thinking</strong> dengan mencari permasalahan nyata yang dialami oleh salah satu anggota kelompoknya.
                                </p>
                                <p>
                                    Permasalahan dapat berasal dari aktivitas sehari-hari, pendidikan, organisasi, pekerjaan, maupun kehidupan sosial.
                                </p>
                                <p>
                                    Berdasarkan permasalahan tersebut, peserta merancang solusi digital dalam bentuk desain <strong className="text-white">UI/UX menggunakan Figma</strong>.
                                </p>

                                <div className="bg-[#22262E] border-l-4 border-yellow-400 p-4 rounded-r-xl text-yellow-300 text-sm font-sans flex items-start gap-3">
                                    <span className="text-xl">🎯</span>
                                    <div>
                                        <strong className="block font-orbitron text-xs uppercase tracking-wider mb-1 text-yellow-200">Fokus Utama Project:</strong>
                                        Fokus utama bukan membuat desain yang indah, tetapi bagaimana desain mampu menjadi <strong className="underline">solusi terhadap permasalahan pengguna</strong>.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Alur Pengerjaan */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">🗺️</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Alur Pengerjaan</h3>
                            </div>

                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 md:p-6 border-l-4 border-blue-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md">1</span>
                                        <h4 className="font-orbitron font-bold text-lg text-white">Design Thinking</h4>
                                    </div>

                                    <p className="text-gray-300 text-sm font-sans mb-4">
                                        Lakukan proses Design Thinking secara sederhana yang meliputi:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
                                        <div className="bg-[#171a26] p-4 rounded-xl border border-gray-800">
                                            <div className="font-orbitron font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                                <span>❤️</span> Empathize
                                            </div>
                                            <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                                <li>Siapa pengguna?</li>
                                                <li>Apa masalah yang dialami?</li>
                                                <li>Bagaimana cara mengetahui masalah tersebut?</li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#171a26] p-4 rounded-xl border border-gray-800">
                                            <div className="font-orbitron font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                                <span>🎯</span> Define
                                            </div>
                                            <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                                <li>Tuliskan permasalahan utama yang ditemukan.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#171a26] p-4 rounded-xl border border-gray-800">
                                            <div className="font-orbitron font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                                <span>💡</span> Ideate
                                            </div>
                                            <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                                <li>Tuliskan beberapa alternatif solusi.</li>
                                                <li>Pilih solusi terbaik beserta alasannya.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 md:p-6 border-l-4 border-indigo-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-indigo-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md">2</span>
                                        <h4 className="font-orbitron font-bold text-lg text-white">Wireframe</h4>
                                    </div>

                                    <p className="text-gray-300 text-sm font-sans mb-3">
                                        Buat wireframe <em>(Low Fidelity / Mid Fidelity)</em> menggunakan Figma. Minimal terdiri dari:
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-orbitron">
                                        <div className="bg-[#171a26] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Navbar</div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Hero Section</div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ About Section</div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Feature Section</div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg text-center border border-gray-800 text-gray-400">Contact Section (Opsional)</div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Footer</div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-[#22262E] border border-gray-800 rounded-xl p-5 md:p-6 border-l-4 border-purple-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-purple-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md">3</span>
                                        <h4 className="font-orbitron font-bold text-lg text-white">Desain UI/UX</h4>
                                    </div>

                                    <p className="text-gray-300 text-sm font-sans mb-3">
                                        Ubah wireframe menjadi desain UI menggunakan Figma. Perhatikan:
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-sans text-gray-200 mb-4">
                                        <div className="bg-[#171a26] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                            <span className="text-purple-400">🎨</span> Konsistensi warna
                                        </div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                            <span className="text-purple-400">✍️</span> Typography
                                        </div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                            <span className="text-purple-400">📐</span> Hierarchy & Alignment
                                        </div>
                                        <div className="bg-[#171a26] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                            <span className="text-purple-400">🔳</span> Whitespace & Contrast
                                        </div>
                                    </div>

                                    <div className="space-y-2 font-sans">
                                        <div className="bg-[#171a26] p-3 rounded-lg text-xs font-orbitron text-gray-300 border border-gray-800 flex items-center gap-2">
                                            <span className="text-yellow-400 text-base">📄</span>
                                            <span>Minimal terdiri dari <strong className="text-white">2 halaman yang saling terhubung</strong>.</span>
                                        </div>

                                        <div className="bg-[#2E53B0]/20 border border-blue-500/30 p-3 rounded-lg text-xs font-orbitron text-blue-300 flex items-center gap-2">
                                            <span className="text-base">⭐</span>
                                            <span><strong className="text-white">Poin Plus:</strong> tambahkan UX (Interaksi / Prototype).</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Ketentuan */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📜</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Ketentuan</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-gray-300">
                                <div className="bg-[#22262E] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                                    <span className="text-blue-400 text-lg font-bold">•</span> Dikerjakan secara individu.
                                </div>
                                <div className="bg-[#22262E] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                                    <span className="text-blue-400 text-lg font-bold">•</span> Menggunakan Figma.
                                </div>
                                <div className="bg-[#22262E] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                                    <span className="text-red-400 text-lg font-bold">•</span> Dilarang menggunakan template jadi.
                                </div>
                                <div className="bg-[#22262E] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                                    <span className="text-blue-400 text-lg font-bold">•</span> Boleh menggunakan plugin icon maupun ilustrasi.
                                </div>
                                <div className="bg-[#22262E] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3 sm:col-span-2">
                                    <span className="text-[#2E53B0] text-lg font-bold">•</span> Seluruh desain merupakan hasil karya yang belum pernah di publikasi.
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Pengumpulan */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                                <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📤</span>
                                <h3 className="font-orbitron font-bold text-xl text-white">Pengumpulan</h3>
                            </div>

                            <p className="text-sm text-gray-300 font-sans mb-4">Peserta mengumpulkan:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                                <div className="bg-[#22262E] p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-orbitron font-bold text-base text-blue-400 mb-2 flex items-center gap-2">
                                            <span>📄</span> 1. Laporan Design Thinking (PDF)
                                        </h4>
                                        <p className="text-xs text-gray-400 mb-3">Berisi:</p>
                                        <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                            <li>Judul Project</li>
                                            <li>Nama Peserta</li>
                                            <li>Latar Belakang Masalah</li>
                                            <li>Empathize</li>
                                            <li>Define</li>
                                            <li>Ideate</li>
                                            <li>Kesimpulan</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-[#22262E] p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-orbitron font-bold text-base text-blue-400 mb-2 flex items-center gap-2">
                                            <span>🌐</span> 2. Link Figma
                                        </h4>
                                        <p className="text-xs text-gray-400 mb-2">Pastikan:</p>
                                        <div className="bg-[#171a26] text-yellow-300 text-xs px-3 py-2 rounded-lg font-orbitron inline-block mb-3 border border-yellow-500/30">
                                            🌐 &quot;Anyone with the link can view.&quot;
                                        </div>
                                        <p className="text-xs text-gray-400">Berisi:</p>
                                        <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside mt-1">
                                            <li>Wireframe</li>
                                            <li>Final UI/UX Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: RUBRIK PENILAIAN */}
                {activeTab === 'rubrik' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
                            <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📊</span>
                            <div>
                                <h3 className="font-orbitron font-bold text-xl text-white">Rubrik Penilaian</h3>
                                <p className="text-gray-400 font-sans text-xs">Bobot dan indikator penilaian resmi Mini Project Akhir</p>
                            </div>
                        </div>

                        {/* Table View (Desktop & Tablet) */}
                        <div className="hidden sm:block overflow-hidden rounded-xl border border-gray-800 bg-[#171a26]">
                            <table className="w-full text-left font-sans text-sm">
                                <thead className="bg-[#22262E] font-orbitron text-xs text-blue-400 uppercase border-b border-gray-800">
                                    <tr>
                                        <th className="py-3.5 px-6">ASPEK</th>
                                        <th className="py-3.5 px-6">INDIKATOR</th>
                                        <th className="py-3.5 px-6 text-center">BOBOT</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800 text-gray-300">
                                    <tr className="hover:bg-[#1e1e2f] transition-colors">
                                        <td className="py-4 px-6 font-bold text-white font-orbitron">Design Thinking</td>
                                        <td className="py-4 px-6">Identifikasi masalah, analisis kebutuhan, solusi</td>
                                        <td className="py-4 px-6 text-center font-orbitron font-bold text-blue-400">25</td>
                                    </tr>
                                    <tr className="hover:bg-[#1e1e2f] transition-colors">
                                        <td className="py-4 px-6 font-bold text-white font-orbitron">Wireframe</td>
                                        <td className="py-4 px-6">Struktur halaman, user flow, kelengkapan</td>
                                        <td className="py-4 px-6 text-center font-orbitron font-bold text-blue-400">20</td>
                                    </tr>
                                    <tr className="hover:bg-[#1e1e2f] transition-colors">
                                        <td className="py-4 px-6 font-bold text-white font-orbitron">Desain UI</td>
                                        <td className="py-4 px-6">Visual, warna, typography, layout, hierarchy, dll</td>
                                        <td className="py-4 px-6 text-center font-orbitron font-bold text-blue-400">30</td>
                                    </tr>
                                    <tr className="hover:bg-[#1e1e2f] transition-colors">
                                        <td className="py-4 px-6 font-bold text-white font-orbitron">UX</td>
                                        <td className="py-4 px-6">Kemudahan penggunaan, konsistensi, navigasi</td>
                                        <td className="py-4 px-6 text-center font-orbitron font-bold text-blue-400">15</td>
                                    </tr>
                                    <tr className="hover:bg-[#1e1e2f] transition-colors">
                                        <td className="py-4 px-6 font-bold text-white font-orbitron">Kreativitas & Orisinalitas</td>
                                        <td className="py-4 px-6">Ide solusi dan inovasi</td>
                                        <td className="py-4 px-6 text-center font-orbitron font-bold text-blue-400">10</td>
                                    </tr>
                                </tbody>
                                <tfoot className="bg-[#22262E] font-orbitron font-bold text-white border-t border-gray-800">
                                    <tr>
                                        <td colSpan={2} className="py-3.5 px-6 uppercase">TOTAL</td>
                                        <td className="py-3.5 px-6 text-center text-green-400 text-base">100%</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* Mobile View (Cards) */}
                        <div className="block sm:hidden space-y-3">
                            <div className="bg-[#171a26] border border-gray-800 p-4 rounded-xl flex justify-between items-start">
                                <div>
                                    <h4 className="font-orbitron font-bold text-white text-sm">Design Thinking</h4>
                                    <p className="text-xs text-gray-400 mt-1">Identifikasi masalah, analisis kebutuhan, solusi</p>
                                </div>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-2.5 py-1 rounded">25</span>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 p-4 rounded-xl flex justify-between items-start">
                                <div>
                                    <h4 className="font-orbitron font-bold text-white text-sm">Wireframe</h4>
                                    <p className="text-xs text-gray-400 mt-1">Struktur halaman, user flow, kelengkapan</p>
                                </div>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-2.5 py-1 rounded">20</span>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 p-4 rounded-xl flex justify-between items-start">
                                <div>
                                    <h4 className="font-orbitron font-bold text-white text-sm">Desain UI</h4>
                                    <p className="text-xs text-gray-400 mt-1">Visual, warna, typography, layout, hierarchy, dll</p>
                                </div>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-2.5 py-1 rounded">30</span>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 p-4 rounded-xl flex justify-between items-start">
                                <div>
                                    <h4 className="font-orbitron font-bold text-white text-sm">UX</h4>
                                    <p className="text-xs text-gray-400 mt-1">Kemudahan penggunaan, konsistensi, navigasi</p>
                                </div>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-2.5 py-1 rounded">15</span>
                            </div>

                            <div className="bg-[#171a26] border border-gray-800 p-4 rounded-xl flex justify-between items-start">
                                <div>
                                    <h4 className="font-orbitron font-bold text-white text-sm">Kreativitas & Orisinalitas</h4>
                                    <p className="text-xs text-gray-400 mt-1">Ide solusi dan inovasi</p>
                                </div>
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-2.5 py-1 rounded">10</span>
                            </div>

                            <div className="bg-[#22262E] border border-green-500/30 p-4 rounded-xl flex justify-between items-center font-orbitron font-bold text-white">
                                <span>TOTAL</span>
                                <span className="text-green-400 text-lg">100%</span>
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
