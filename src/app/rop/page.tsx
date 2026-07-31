'use client';
import { useEffect } from 'react';
import "../../assets/css/style.css"

export default function ROP() {
    useEffect(() => {
        window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSeN1roEydnV6gPfE2k9v8Zjq7OE6DlyfBvL5IiyK2abyW-9nw/viewform');
    }, []);

    return (
        <div className="animate-pulse flex items-center font-orbitron justify-center min-h-screen bg-[#171a26] text-white text-xl font-orbitron">
            Mengarahkan ke Form Replace Online Class ...
        </div>
        // <div className="flex items-center font-orbitron justify-center min-h-screen bg-[#171a26] text-white text-xl font-orbitron">
        //     CLOSED 🔒
        // </div>
    );
}
