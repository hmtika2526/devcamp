'use client';
import { Element } from 'react-scroll';
import React from "react";
import dynamic from "next/dynamic";
// import Image from 'next/image';
import Aurora from '../../utils/Aurora';
// import Silk from '../../utils/Silk'
import ScrollFloat from "@/utils/ScrollFloat";

import Preloader from '../../components/Preloader';
import Navbar from '../../components/Navbar';
import Banner from '@/components/Banner';
import Footer from '../../components/Footer';
import RewardHeader from '@/components/RewardHeader';
import Loading from '@/components/Loading';


import '../../assets/css/style.css';

const SubmissionTop10 = dynamic(() => import("@/components/Submission.top10"), {
    ssr: false, 
    loading: () => <Loading />,
});

const RewardBestproject = dynamic(() => import("@/components/Reward.Bestproject"), {
    ssr: false, 
    loading: () => <Loading />,
});


export default function RewardPage() {
    return (
        <>
            <Preloader />
            <Navbar />

            <Banner className='pt-[100px] bg-[#171a26]' />


            <main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[50px]">
            <Aurora />
                <RewardHeader />

                <Element name="bestproject" className='relative z-10'>
                    <RewardBestproject />
                </Element>

                <Element name="submission" className='relative z-10'>
                    <SubmissionTop10 />
                </Element>


            </main>

            <Footer />

        </>
    );
}
