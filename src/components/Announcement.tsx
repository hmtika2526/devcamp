'use client';

import React from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import announcements from '../data/announcements.json';

export default function Announcement() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                ANNOUNCEMENT
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Pusat pengumuman resmi kegiatan DevCamp: Jadwal Zoom, deadline tugas, pengumuman project, hingga kelulusan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {announcements.map((item) => (
                    <div
                        key={item.id}
                        className={`relative bg-[#1e1e2f] border ${
                            item.important ? 'border-[#2E53B0] shadow-[0_0_15px_rgba(46,83,176,0.3)]' : 'border-gray-800'
                        } rounded-xl p-6 transition-all duration-300 hover:border-blue-400 hover:-translate-y-1 flex flex-col justify-between`}
                    >
                        {item.important && (
                            <span className="absolute -top-3 right-6 bg-[#2E53B0] text-white text-xs font-orbitron font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Important
                            </span>
                        )}

                        <div>
                            <div className="flex items-center justify-between gap-4 mb-3">
                                <span className="bg-[#22262E] text-blue-400 font-orbitron text-xs font-semibold px-3 py-1 rounded-md">
                                    {item.category}
                                </span>
                                <span className="text-gray-400 text-xs font-orbitron">{item.date}</span>
                            </div>

                            <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mb-3 leading-snug">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                                {item.content}
                            </p>
                        </div>

                        {item.actionUrl && (
                            <a
                                href={item.actionUrl}
                                target={item.actionUrl.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 text-center"
                            >
                                {item.actionLabel || 'Lihat Detail'}
                                <span>➔</span>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
