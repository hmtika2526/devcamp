'use client';

import dynamic from "next/dynamic";
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Loading from '@/components/Loading';
import Footer from '@/components/Footer';
import Aurora from '@/utils/Aurora';
import '@/assets/css/style.css';

const Assignment = dynamic(() => import("@/components/Assignment"), {
	ssr: false, 
	loading: () => <Loading />,
});

export default function AssignmentPage() {
	return (
		<>
			<Preloader />
			<Navbar />
			<Banner className='pt-[100px] bg-[#171a26]' />

			<main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
				<Aurora />
				<div className='relative z-10'>
					<Assignment />
				</div>
			</main>

			<Footer />
		</>
	);
}
