'use client';

import React from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import contact from '../data/contact.json';

export default function Contact() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                CONTACT US
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Memiliki kendala atau pertanyaan? Hubungi Helpdesk & Panitia DevCamp melalui saluran resmi berikut.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-8 space-y-6">
                    <h3 className="font-orbitron font-bold text-xl text-white border-b border-gray-800 pb-3 flex items-center gap-2">
                        <span>✉️</span> Official Contact
                    </h3>

                    <div className="space-y-4 font-sans">
                        {contact.email && (
                            <div>
                                <span className="block font-orbitron text-xs text-gray-400 font-semibold mb-1">EMAIL OFFICIAL</span>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-blue-400 hover:underline font-bold text-base font-orbitron"
                                >
                                    {contact.email}
                                </a>
                            </div>
                        )}

                        {'websiteHmtika' in contact && (contact as Record<string, string>).websiteHmtika && (
                            <div>
                                <span className="block font-orbitron text-xs text-gray-400 font-semibold mb-1">WEBSITE OFFICIAL</span>
                                <a
                                    href={(contact as Record<string, string>).websiteHmtika}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline font-bold text-base font-orbitron"
                                >
                                    {(contact as Record<string, string>).websiteHmtika.replace(/^https?:\/\//, '')}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-8 space-y-6">
                    <h3 className="font-orbitron font-bold text-xl text-white border-b border-gray-800 pb-3 flex items-center gap-2">
                        <span>🌐</span> Social & Organization
                    </h3>

                    <div className="space-y-4 font-sans">
                        {contact.instagram && (
                            <div>
                                <span className="block font-orbitron text-xs text-gray-400 font-semibold mb-1">INSTAGRAM OFFICIAL</span>
                                <a
                                    href={contact.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline font-bold text-base font-orbitron"
                                >
                                    @hmtika.stb
                                </a>
                            </div>
                        )}

                        {contact.github && (
                            <div>
                                <span className="block font-orbitron text-xs text-gray-400 font-semibold mb-1">GITHUB REPOSITORY</span>
                                <a
                                    href={contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline font-bold text-base font-orbitron"
                                >
                                    {contact.github.replace(/^https?:\/\//, '')}
                                </a>
                            </div>
                        )}

                        {contact.address && (
                            <div>
                                <span className="block font-orbitron text-xs text-gray-400 font-semibold mb-1">SEKRETARIAT HMTIKA</span>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {contact.address}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
