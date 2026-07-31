'use client';
import { Element } from 'react-scroll';
// import Image from 'next/image';
import Aurora from '../../utils/Aurora';
// import Silk from '../../utils/Silk'

import Preloader from '../../components/Preloader';
import Navbar from '../../components/Navbar';
import Banner from '@/components/Banner';
import Requirement from '../../components/Requirement';
import Footer from '../../components/Footer';


import '../../assets/css/style.css';


export default function RequirementPage() {
	return (
		<>
			<Preloader />
			<Navbar />

			<Banner className='pt-[100px] bg-[#171a26]' />


			<main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
				<Aurora />

				<Element name="requirement" className='relative z-10'>
					<Requirement />
				</Element>

			</main>

			<Footer />

		</>
	);
}
