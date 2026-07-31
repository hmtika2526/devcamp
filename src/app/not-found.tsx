'use client';
import { useEffect } from 'react';
import "../assets/css/style.css";
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        document.title = "404 - Page Not Found";
    }, []);

    return (
        <div className="flex flex-col items-center font-orbitron justify-center min-h-screen bg-[#171a26] text-white font-black text-xl font-orbitron">
            <h1 className='animate-pulse text-white text-3xl font-orbitron tracking-wide'>404 NOT FOUND</h1>
            <a
                href="/"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go to Homepage
            </a>
        </div>
    );
}