'use client';

import React from "react";

import '../assets/css/style.css';

import timelineData from "../data/timeline.json";

import ScrollFloat from '../utils/ScrollFloat';
import ScrollReveal from '../utils/ScrollReveal';

export default function Timeline() {
    return (
        <div className="py-12 pt-[100px] container mx-auto" id="about">
            <ScrollFloat
                containerClassName="text-center text-white font-orbitron font-extrabold"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                TIMELINE
            </ScrollFloat>


            <div className="max-w-2xl mx-auto relative border-l-4 border-blue-500 pl-8">
                {timelineData.map((event) => {
                    const tanggalFull = new Date(event["time-start"]).toLocaleDateString("id-ID", {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    }).toUpperCase();

                    const rentangTanggal = event["time-end"]
                        ? `${new Date(event["time-start"]).toLocaleDateString("id-ID", {
                            day: 'numeric', month: 'long', year: 'numeric'
                        })} – ${new Date(event["time-end"]).toLocaleDateString("id-ID", {
                            day: 'numeric', month: 'long', year: 'numeric'
                        })}`
                        : null;

                    return (
                        <div key={event.id} className="mb-12 relative">
                            {/* Titik timeline */}
                            <div className="absolute -left-6 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                            {/* Konten */}
                            <div className="ml-4">
                                <p className="text-sm text-blue-300 font-semibold tracking-wide">{tanggalFull}</p>
                                <h3 className="text-lg font-bold mt-1 text-white">{event.name}</h3>
                                {rentangTanggal && (
                                    <p className="text-sm text-white mt-1">{rentangTanggal}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <ScrollFloat
                containerClassName="text-center text-white font-orbitron font-extrabold"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                CALENDAR
            </ScrollFloat>

            <div className="flex justify-center">
                <img
                    src="/assets/images/timeline.png"
                    alt="Calendar Timeline"
                    className="rounded-xl"
                    loading="lazy"
                />
            </div>

        </div>
    );
}