// 'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { faCamera, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink } from 'react-scroll';

// Load dinamis & hanya saat dibutuhkan
const LogoHMTIKA = dynamic(() => import('../dynamics/LogoHMTIKA'), { ssr: false });
const BlurText = dynamic(() => import('../utils/BlurText'), { ssr: false });
const SplitText = dynamic(() => import('../utils/SplitText'), { ssr: false });
const TrueFocus = dynamic(() => import('../utils/TrueFocus'), { ssr: false });

// Hindari import global CSS jika tidak perlu
import '../assets/css/style.css';

export default function Hero() {
    return (
        <div className="hero relative min-h-screen flex flex-col justify-center items-center text-white overflow-x-hidden pt-[100px] pb-[100px]">
            <Image
                src="/assets/images/bg-1.webp"
                alt="background"
                fill
                priority
                sizes="100vw"
                className="object-cover z-0"
            />

            <div className="flex flex-col md:flex-row-reverse items-center gap-10 z-20 border border-white/50 rounded-3xl p-8 contain-layout-style">
                <div className="w-full md:w-1/4 flex justify-center">
                    <LogoHMTIKA />
                </div>

                <div className="w-full md:w-3/4">
                    <SplitText
                        text="DEVCAMP HMTIKA"
                        className="text-2xl sm:text-4xl font-orbitron font-extrabold text-white text-center sm:text-start"
                    />

                    <TrueFocus
                        sentence="From Idea to Interface"
                        borderColor="#2E53B0"
                        glowColor="rgba(46, 83, 176, 0.6)"
                        className="mt-10 flex gap-3 flex-wrap justify-center sm:justify-start text-center sm:text-start font-orbitron text-white text-xl sm:text-2xl font-extrabold"
                    />

                    <BlurText
                        text="#Design It, Code It, Launch It"
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className="mt-4 text-lg sm:text-xl font-orbitron font-semibold text-white"
                    />

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        {/* <Link
                            href="/register"
                            target="_blank"
                            className="bg-[#2E53B0] text-white px-5 py-3 rounded-2xl font-orbitron font-semibold flex items-center justify-center gap-2"
                        >
                            REGISTER NOW
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link> */}

                        {/* <div
                            className="bg-[#2E53B0] text-white px-5 py-3 rounded-2xl font-orbitron font-semibold flex items-center justify-center gap-2"
                        >
                            REGISTER CLOSED 🔒
                        </div> */}

                        <ScrollLink
                            to="AboutDevcamp"
                            smooth
                            duration={700}
                            offset={-75}
                            className="border-2 border-[#2E53B0] px-5 py-3 rounded-2xl font-orbitron text-white flex items-center justify-center gap-2 cursor-pointer"
                        >
                            LEARN MORE
                            <FontAwesomeIcon icon={faChevronDown} />
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
