'use client';
import { Element } from 'react-scroll';
// import Image from 'next/image';
import Aurora from '../../utils/Aurora';
import dynamic from 'next/dynamic';

import Preloader from '../../components/Preloader';
import Navbar from '../../components/Navbar';
import Banner from '@/components/Banner';
import Loading from '@/components/Loading';
import Footer from '../../components/Footer';

const Timeline = dynamic(() => import('@/components/Timeline'), {
	ssr: false,
	loading: () => <Loading />,
});


import '../../assets/css/style.css';


export default function Home() {
	return (
		<>
			<Preloader />
			<Navbar />

			<Banner className='pt-[100px] bg-[#171a26]' />

			<main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
				<Aurora />

				<Element name="timeline" className='relative z-10'>
					<Timeline />
				</Element>

			</main>

			<Footer />

		</>
	);
}
