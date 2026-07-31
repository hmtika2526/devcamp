import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import mediaPartnerData from '../data/mediapartner.json';
import '../assets/css/style.css';

export default function MediaPartner() {
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = mediaPartnerData.length;

    const handleImageLoad = () => {
        setImagesLoaded((prev) => prev + 1);
    };

    return (
        <div className="my-[50px]">
            <div className="container text-center mb-12 mx-auto">
                <h2 className="text-white text-4xl font-orbitron font-bold mb-6">Media Partner</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {mediaPartnerData.map((partner) => (
                        <Link
                            href={partner.url}
                            key={partner.id}
                            className="flex justify-center items-center p-2 rounded-x"
                            target="_blank"
                        >
                            <Image
                                src={partner.image}
                                width={200}
                                height={200}
                                alt={partner.name}
                                loading="lazy"
                                onLoad={handleImageLoad}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
