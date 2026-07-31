'use client';

import React from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import attendance from '../data/attendance.json';

export default function Attendance() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                ATTENDANCE
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Pusat pengisian absensi peserta DevCamp. Pastikan melakukan presensi tepat waktu di setiap sesi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {attendance.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#1e1e2f] border border-[#2E53B0] rounded-xl p-8 flex flex-col justify-between shadow-[0_0_20px_rgba(46,83,176,0.15)] hover:shadow-[0_0_25px_rgba(46,83,176,0.3)] transition-all"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-[#2E53B0] text-white font-orbitron text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    {item.session}
                                </span>
                                <span className="text-green-400 font-orbitron text-xs font-semibold flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    {item.status}
                                </span>
                            </div>

                            <h3 className="font-orbitron font-bold text-xl md:text-2xl text-white mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-sans">
                                {item.description}
                            </p>

                            <div className="bg-[#22262E] p-3 rounded-lg text-xs font-orbitron text-gray-300 mb-6">
                                ⏳ <span className="font-bold text-white">Batas Waktu:</span> {item.deadline}
                            </div>
                        </div>

                        <a
                            href={item.formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-6 rounded-lg text-center transition-colors text-sm uppercase tracking-wider"
                        >
                            Isi Form Presensi ➔
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
