'use client';

import React from "react";

import '../assets/css/style.css';

import requirement from '../data/requirement.json';

import ScrollFloat from '../utils/ScrollFloat';
import ScrollReveal from '../utils/ScrollReveal';

export default function Requirement() {
    return (
        <div className="py-12 pt-[100px] container mx-auto text-white" id="about">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                REQUIREMENT
            </ScrollFloat>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm font-orbitron font-extrabold px-10">
                {/* Hardware Section */}
                <div className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
                    <h3 className="text-lg md:text-xxl font-semibold mb-4 border-b border-gray-600 pb-2">🔧 Hardware</h3>
                    <ul className="list-disc list-inside space-y-2">
                        {requirement.hardware.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Software Section */}
                <div className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
                    <h3 className="text-lg md:text-xxl font-semibold mb-4 border-b border-gray-600 pb-2">💻 Software</h3>
                    <ul className="space-y-3">
                        {Object.entries(requirement.software).map(([key, value]) => (
                            <li key={key}>
                                <span className="font-semibold capitalize">{key.replace(/-/g, ' ')}:</span>{" "}
                                {Array.isArray(value) ? (
                                    <ul className="list-disc list-inside pl-4">
                                        {value.map((v, i) => <li key={i}>{v}</li>)}
                                    </ul>
                                ) : (
                                    <span>{value}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
