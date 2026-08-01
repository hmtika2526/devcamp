import Image from 'next/image';
import Link from 'next/link';

import mediaPartnerData from '../data/mediapartner.json';
import '../assets/css/style.css';

export default function MediaPartner() {
    return (
        <section className="py-16 bg-[#171a26]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-white text-3xl md:text-4xl font-orbitron font-bold mb-3 tracking-wide">
                    Media Partner & Collaboration
                </h2>
                <p className="text-gray-400 font-orbitron text-xs md:text-sm max-w-xl mx-auto mb-10">
                    Didukung oleh berbagai organisasi kemahasiswaan, institusi pendidikan, dan partner media.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-6xl mx-auto">
                    {mediaPartnerData.map((partner) => (
                        <Link
                            href={partner.url}
                            key={partner.id}
                            className="bg-[#1e1e2f] border border-gray-800 hover:border-[#2E53B0] rounded-xl p-3 md:p-4 transition-all duration-300 transform hover:scale-105 shadow-md flex justify-center items-center w-32 h-24 sm:w-40 sm:h-28 md:w-44 md:h-32 group relative"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={partner.name}
                        >
                            <Image
                                src={partner.image}
                                width={160}
                                height={100}
                                alt={partner.name}
                                className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                                loading="lazy"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
