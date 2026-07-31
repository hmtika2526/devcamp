'use client';

import React from "react";

import '../assets/css/style.css';

import KelompokData from '../data/peserta.json';
import ScrollFloat from '../utils/ScrollFloat';
import ScrollReveal from '../utils/ScrollReveal';

export default function Peserta() {
    return (
        <div className="py-12 pt-[100px] container mx-auto" id="peserta">
            <ScrollFloat
                containerClassName="text-center text-white font-orbitron font-extrabold"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                PESERTA
            </ScrollFloat>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
                {KelompokData.map((kelompok) => (
                    <div key={kelompok.id} className="bg-[#1e1e2f] rounded-xl shadow-lg overflow-hidden">
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl text-center font-bold text-blue-300">{kelompok.name}</h3>
                        </div>
                        <img
                            src={kelompok["mentor-image"]}
                            alt={`Mentor ${kelompok.name}`}
                            className="h-[240px] m-auto"
                        />
                        <div className="p-4 space-y-2">
                            <p className="text-sm font-mono">
                                <span className="font-semibold text-[#ffffff]">Mentor:</span> {kelompok.mentor}
                            </p>
                            <div className="mt-2">
                                <p className="font-semibold text-[#ffffff]">Anggota:</p>
                                <ol className="text-sm font-mono list-decimal ml-5 mt-2">
                                    {kelompok.members.map((member, i) => (
                                        <li key={i} className="mt-2 text-[#ffffff]">
                                            {member.name}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}