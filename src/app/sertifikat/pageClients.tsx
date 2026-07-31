'use client';
import { Element } from 'react-scroll';
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import('@/utils/Aurora'), { ssr: false });
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Loading from '@/components/Loading';

const Sertifikat = dynamic(() => import('@/components/Sertifikat'), {
    ssr: false,
    loading: () => <Loading />,
});

import Footer from '@/components/Footer';
import '@/assets/css/style.css';

export default function SertifikatPageClients() {
    return (
        <>
            <Preloader />
            <Navbar />

            <Banner className='pt-[100px] bg-[#171a26]' />

            <main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
                <Aurora />

                <Element name="sertifikat" className='relative z-10'>
                    <Sertifikat />
                </Element>
            </main>

            <Footer />
        </>
    );
}