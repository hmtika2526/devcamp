'use client';

import React from 'react';
import ScrollFloat from '../utils/ScrollFloat';
import quizzes from '../data/quizzes.json';

export default function Quiz() {
    return (
        <div className="py-12 pt-[120px] container mx-auto text-white px-4 md:px-10">
            <ScrollFloat
                containerClassName="text-center font-orbitron font-extrabold text-3xl md:text-5xl tracking-wide text-white mb-4"
                textClassName=""
                animationDuration={1}
                stagger={0.03}
                ease="back.inOut(2)"
            >
                QUIZ
            </ScrollFloat>
            <p className="text-center text-gray-300 font-orbitron max-w-2xl mx-auto mb-12 text-sm md:text-base">
                Kuis pemahaman setiap modul pembelajaran. Kerjakan kuis interaktif ini langsung di platform Quizizz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {quizzes.map((quiz) => (
                    <div
                        key={quiz.id}
                        className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-6 hover:border-[#2E53B0] transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <span className="bg-[#22262E] text-blue-400 font-orbitron text-xs font-semibold px-3 py-1 rounded-md">
                                    Quizizz Interactive
                                </span>
                                <span className="text-gray-400 text-xs font-orbitron">
                                    📝 {quiz.questionsCount} Soal
                                </span>
                            </div>

                            <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mb-3 leading-snug">
                                {quiz.moduleTitle}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                                {quiz.description}
                            </p>
                        </div>

                        <a
                            href={quiz.quizizzUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full bg-[#2E53B0] hover:bg-blue-600 text-white font-orbitron font-bold py-3 px-4 rounded-lg text-sm transition-colors text-center uppercase tracking-wider"
                        >
                            Kerjakan Quiz 🚀
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
