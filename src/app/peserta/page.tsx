'use client';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';
// import Image from 'next/image';
import Aurora from '../../utils/Aurora';
// import Silk from '../../utils/Silk'

import Preloader from '../../components/Preloader';
import Navbar from '../../components/Navbar';
import Banner from '@/components/Banner';
import Loading from '@/components/Loading';

const Peserta = dynamic(() => import("@/components/Peserta"), {
    ssr: false, 
    loading: () => <Loading />,
});
import Footer from '../../components/Footer';


import '../../assets/css/style.css';


export default function PesertaHome() {
    return (
        <>
            <Preloader />
            <Navbar />

            <Banner className='pt-[100px] bg-[#171a26]' />


            <main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
                <Aurora />


                <Element name="Peserta" className='relative z-10'>
                    <Peserta />
                </Element>
            </main>

            <Footer />

        </>
    );
}
