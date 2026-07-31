// 'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const FeedCarousel = () => {
    const images = [
        'feed1.jpg',
        'feed2.png',
        'feed3.png',
        'feed4.png',
        'feed5.png',
        'feed6.png',
        'feed7.png',
        'feed8.png',
        'feed9.png',
        'feed10.png',
        'feed11.png'
    ];

    return (
        <section className="py-12 bg-[#171a26]">
            <div className="max-w-xl mx-auto">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    loop={true}
                    pagination={{ clickable: true }}
                    coverflowEffect={{
                        rotate: 30,
                        depth: 80,
                        modifier: 1,
                        stretch: 0,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full h-[420px]"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <Image
                                src={`/assets/images/feed/${img}`}
                                alt={`feed-${index + 1}`}
                                width={320}
                                height={400}
                                loading="lazy"
                                className="rounded-xl object-cover shadow-sm transition duration-200 ease-in-out"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeedCarousel;
