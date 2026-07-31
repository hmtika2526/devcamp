// 'use client';
import '../assets/css/style.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1b1e23] text-white px-4 py-[30px] md:px-16">
            <div className="text-center text-lg sm:text-2xl text-white font-orbitron font-extrabold">
                <span className='mx-3'>{new Date().getFullYear()}</span>
                <Link href="https://instagram.com/hmtika.stb" target="_blank" rel="noopener noreferrer">@HMTIKA.STB</Link>
                <span className="mx-2">|</span> All rights reserved.
            </div>
        </footer>
    );
}
