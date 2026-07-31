'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
	const [loaded, setLoaded] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		document.body.style.overflow = 'hidden'; // Lock scroll awal

		const onFullyLoaded = () => {
			setFadeOut(true); // Trigger animasi keluar
			const timeout = setTimeout(() => {
				setLoaded(true);
				document.body.style.overflow = ''; // Unlock scroll
			}, 600); // Durasi fade-out (harus sama dengan animasi)

			return () => clearTimeout(timeout);
		};

		if (document.readyState === 'complete') {
			onFullyLoaded();
		} else {
			window.addEventListener('load', onFullyLoaded);
		}

		return () => window.removeEventListener('load', onFullyLoaded);
	}, []);

	if (loaded) return null;

	return (
		<div
			className={`fixed inset-0 z-[9999] bg-[#171a26] flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
				}`}
		>
			<div className="animate-pulse text-white text-3xl font-orbitron tracking-wide">
				Launching DEVCAMP...
			</div>
		</div>
	);
}
