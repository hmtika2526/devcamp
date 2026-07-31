'use client';

import React, { useState } from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import faqs from '../data/faqs.json';

export default function FAQ() {
    const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
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
                FREQUENTLY ASKED QUESTIONS
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Kumpulan pertanyaan yang paling sering ditanyakan seputar pelaksanaan kegiatan DevCamp HMTIKA.
            </p>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                        <div
                            key={faq.id}
                            className="bg-[#1e1e2f] border border-gray-800 rounded-xl overflow-hidden transition-all duration-200"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4 font-orbitron font-bold text-base md:text-lg text-white hover:text-blue-400 transition-colors"
                            >
                                <span>{faq.question}</span>
                                <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2E53B0]' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            {isOpen && (
                                <div className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed font-sans border-t border-gray-800/50 pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
