'use client';

import React from 'react';
import Link from 'next/link';
import ScrollFloat from '../utils/ScrollFloat';

export default function MiniProjectDetail() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="bg-[#2E53B0]/20 text-[#2E53B0] border border-[#2E53B0]/50 font-orbitron text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
                    Panduan Tugas Resmi
                </span>

                <ScrollFloat
                    containerClassName="font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-3"
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

                <p className="text-gray-300 font-sans max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Petunjuk lengkap alur pengerjaan, ketentuan tugas, serta mekanisme pengumpulan Mini Project Akhir DevCamp HMTIKA Batch 2.
                </p>
            </div>

            {/* Quick Summary Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                        <span className="text-gray-400 text-xs font-orbitron block uppercase">Deadline</span>
                        <span className="text-white text-sm font-orbitron font-bold">9 Agustus 2026 (23:59 WIB)</span>
                    </div>
                </div>

                <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    <div>
                        <span className="text-gray-400 text-xs font-orbitron block uppercase">Tipe Pengerjaan</span>
                        <span className="text-white text-sm font-orbitron font-bold">Individu (Figma)</span>
                    </div>
                </div>

                <div className="bg-[#1e1e2f] border border-[#2E53B0]/40 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                        <span className="text-gray-400 text-xs font-orbitron block uppercase">Output Desain</span>
                        <span className="text-white text-sm font-orbitron font-bold">Min. 2 Halaman Terhubung</span>
                    </div>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-8">
                
                {/* Section 1: Studi Kasus */}
                <div className="bg-[#1e1e2f] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                        <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">💡</span>
                        <h3 className="font-orbitron font-bold text-xl text-white">Studi Kasus & Tujuan</h3>
                    </div>

                    <div className="space-y-4 font-sans text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            Setiap peserta diminta melakukan proses <strong className="text-white">Design Thinking</strong> dengan mencari permasalahan nyata yang dialami oleh salah satu anggota kelompoknya.
                        </p>
                        <p>
                            Permasalahan dapat berasal dari aktivitas sehari-hari, pendidikan, organisasi, pekerjaan, maupun kehidupan sosial. Berdasarkan permasalahan tersebut, peserta merancang solusi digital dalam bentuk desain <strong className="text-white">UI/UX menggunakan Figma</strong>.
                        </p>

                        <div className="bg-[#171a26] border-l-4 border-yellow-400 p-4 rounded-r-xl text-yellow-300 text-sm font-sans flex items-start gap-3">
                            <span className="text-xl">🎯</span>
                            <div>
                                <strong className="block font-orbitron text-xs uppercase tracking-wider mb-1 text-yellow-200">Fokus Utama Project:</strong>
                                Bukan sekadar membuat desain yang indah, melainkan bagaimana desain mampu menjadi <strong className="underline">solusi nyata</strong> terhadap permasalahan pengguna.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Alur Pengerjaan */}
                <div className="bg-[#1e1e2f] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
                        <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">🗺️</span>
                        <h3 className="font-orbitron font-bold text-xl text-white">Alur Pengerjaan (3 Tahap Utama)</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-5 md:p-6 border-l-4 border-blue-500">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-blue-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md">TAHAP 1</span>
                                <h4 className="font-orbitron font-bold text-lg text-white">Design Thinking</h4>
                            </div>

                            <p className="text-gray-300 text-sm font-sans mb-4">
                                Lakukan proses Design Thinking secara sederhana yang meliputi 3 langkah berikut:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
                                <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800">
                                    <div className="font-orbitron font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                        <span>❤️</span> 1. Empathize
                                    </div>
                                    <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside font-sans">
                                        <li>Siapa pengguna?</li>
                                        <li>Apa masalah yang dialami?</li>
                                        <li>Bagaimana cara mengetahui masalah tersebut?</li>
                                    </ul>
                                </div>

                                <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800">
                                    <div className="font-orbitron font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                        <span>🎯</span> 2. Define
                                    </div>
                                    <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside font-sans">
                                        <li>Tuliskan permasalahan utama yang ditemukan.</li>
                                    </ul>
                                </div>

                                <div className="bg-[#22262E] p-4 rounded-xl border border-gray-800">
                                    <div className="font-orbitron font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                        <span>💡</span> 3. Ideate
                                    </div>
                                    <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside font-sans">
                                        <li>Tuliskan beberapa alternatif solusi.</li>
                                        <li>Pilih solusi terbaik beserta alasannya.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-5 md:p-6 border-l-4 border-indigo-500">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-indigo-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md">TAHAP 2</span>
                                <h4 className="font-orbitron font-bold text-lg text-white">Wireframe (Figma)</h4>
                            </div>

                            <p className="text-gray-300 text-sm font-sans mb-3">
                                Buat wireframe <em>(Low Fidelity / Mid Fidelity)</em> menggunakan Figma yang minimal terdiri dari komponen berikut:
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-orbitron">
                                <div className="bg-[#22262E] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Navbar</div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Hero Section</div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ About Section</div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Feature Section</div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg text-center border border-gray-800 text-gray-400">Contact Section (Opsional)</div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg text-center border border-gray-700 text-white">✓ Footer</div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-[#171a26] border border-gray-800 rounded-xl p-5 md:p-6 border-l-4 border-purple-500">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-purple-600 text-white font-orbitron font-bold text-xs px-2.5 py-1 rounded-md">TAHAP 3</span>
                                <h4 className="font-orbitron font-bold text-lg text-white">Desain UI/UX (High Fidelity)</h4>
                            </div>

                            <p className="text-gray-300 text-sm font-sans mb-3">
                                Ubah wireframe menjadi desain UI menggunakan Figma dengan memperhatikan aspek berikut:
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-sans text-gray-200 mb-4">
                                <div className="bg-[#22262E] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                    <span className="text-purple-400">🎨</span> Konsistensi Warna
                                </div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                    <span className="text-purple-400">✍️</span> Typography
                                </div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                    <span className="text-purple-400">📐</span> Hierarchy & Alignment
                                </div>
                                <div className="bg-[#22262E] p-2.5 rounded-lg border border-gray-800 flex items-center gap-2">
                                    <span className="text-purple-400">🔳</span> Whitespace & Contrast
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="bg-[#22262E] p-3 rounded-lg text-xs font-orbitron text-gray-300 border border-gray-800 flex items-center gap-2">
                                    <span className="text-yellow-400 text-base">📄</span>
                                    <span>Minimal terdiri dari <strong className="text-white">2 halaman yang saling terhubung</strong>.</span>
                                </div>

                                <div className="bg-[#2E53B0]/20 border border-blue-500/30 p-3 rounded-lg text-xs font-orbitron text-blue-300 flex items-center gap-2">
                                    <span className="text-base">⭐</span>
                                    <span><strong className="text-white">Poin Plus:</strong> Tambahkan UX (Interaksi / Prototyping interaktif pada Figma).</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Ketentuan Pengerjaan */}
                <div className="bg-[#1e1e2f] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                        <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📜</span>
                        <h3 className="font-orbitron font-bold text-xl text-white">Ketentuan Pengerjaan</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-gray-300">
                        <div className="bg-[#171a26] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                            <span className="text-blue-400 text-lg">✓</span> Dikerjakan secara <strong>Individu</strong>.
                        </div>
                        <div className="bg-[#171a26] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                            <span className="text-blue-400 text-lg">✓</span> Menggunakan tools utama <strong>Figma</strong>.
                        </div>
                        <div className="bg-[#171a26] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                            <span className="text-red-400 text-lg">🚫</span> Dilarang menggunakan <strong>template jadi</strong>.
                        </div>
                        <div className="bg-[#171a26] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3">
                            <span className="text-blue-400 text-lg">✓</span> Boleh menggunakan <strong>plugin icon maupun ilustrasi</strong>.
                        </div>
                        <div className="bg-[#171a26] p-3.5 rounded-xl border border-gray-800 flex items-center gap-3 sm:col-span-2">
                            <span className="text-[#2E53B0] text-lg">⭐</span> Seluruh desain merupakan <strong>hasil karya murni</strong> yang belum pernah dipublikasikan.
                        </div>
                    </div>
                </div>

                {/* Section 4: Berkas Pengumpulan */}
                <div className="bg-[#1e1e2f] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                        <span className="bg-[#2E53B0] text-white p-2 rounded-lg text-lg">📤</span>
                        <h3 className="font-orbitron font-bold text-xl text-white">Berkas & Pengumpulan</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                        <div className="bg-[#171a26] p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                            <div>
                                <h4 className="font-orbitron font-bold text-base text-blue-400 mb-2 flex items-center gap-2">
                                    <span>📄</span> 1. Laporan Design Thinking (PDF)
                                </h4>
                                <p className="text-xs text-gray-400 mb-3">Laporan PDF harus berisi poin-poin berikut:</p>
                                <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                    <li>Judul Project</li>
                                    <li>Nama Peserta</li>
                                    <li>Latar Belakang Masalah</li>
                                    <li>Empathize, Define, & Ideate</li>
                                    <li>Kesimpulan</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#171a26] p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                            <div>
                                <h4 className="font-orbitron font-bold text-base text-blue-400 mb-2 flex items-center gap-2">
                                    <span>🌐</span> 2. Link Figma
                                </h4>
                                <p className="text-xs text-gray-400 mb-2">Pastikan pengaturan akses Figma set ke:</p>
                                <div className="bg-[#22262E] text-yellow-300 text-xs px-3 py-2 rounded-lg font-orbitron inline-block mb-3 border border-yellow-500/30">
                                    🌐 &quot;Anyone with the link can view&quot;
                                </div>
                                <p className="text-xs text-gray-400">File Figma wajib mencakup Wireframe & Final UI/UX Design.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <Link
                        href="/assignment"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22262E] hover:bg-[#2c323f] border border-gray-700 text-white font-orbitron font-bold py-3.5 px-6 rounded-xl text-sm transition-colors"
                    >
                        <span>⬅️</span>
                        <span>Kembali ke Task Submission</span>
                    </Link>

                    <a
                        href="https://docs.google.com/forms/d/e/example-mini-project/viewform"
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
