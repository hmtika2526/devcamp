"use client";

import React from 'react';
import { Element } from "react-scroll";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/utils/Aurora"), { ssr: false });

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

interface SubmissionLayoutProps {
    children: React.ReactNode;
}

export default function SubmissionLayout({ children }: SubmissionLayoutProps) {
    return (
        <>
            <Preloader />
            <Navbar />
            <Banner className="pt-[100px] bg-[#171a26]" />

            <main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
                <Aurora />

                <Element
                    name="submission"
                    className="relative z-10 px-6 md:px-20 text-[#ffffff]"
                >
                    {children}
                </Element>
            </main>

            <Footer />
        </>
    );
}