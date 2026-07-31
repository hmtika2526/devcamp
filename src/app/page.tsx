'use client';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';

import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Loading from '../components/Loading';

const Banner = dynamic(() => import('../components/Banner'), {
	ssr: true,
	loading: () => <Loading />,
});

const AboutDevcamp = dynamic(() => import('../components/AboutDevcamp'), {
	ssr: true,
	loading: () => <Loading />,
});

const FeedCoverflow = dynamic(() => import('../components/FeedCarousel'), {
	ssr: true,
	loading: () => <Loading />,
});

const WhyDevcamp = dynamic(() => import('../components/WhyDevcamp'), {
	ssr: true,
	loading: () => <Loading />,
});

const Instructor = dynamic(() => import('../components/Instructor'), {
	ssr: true,
	loading: () => <Loading />,
});

const MediaPartner = dynamic(() => import('../components/MediaPartner'), {
	ssr: true,
	loading: () => <Loading />,
});

const Footer = dynamic(() => import('../components/Footer'), {
	ssr: true,
	loading: () => <Loading />,
});


const Aurora = dynamic(() => import('../utils/Aurora'), { ssr: false });
const Silk = dynamic(() => import('../utils/Silk'), { ssr: false });

// import { NextSeo } from 'next-seo';
// import SEO from './seo.config';

// {/* <NextSeo {...SEO} /> */}


import '../assets/css/style.css';


export default function Home() {
	return (
		<>
			<Preloader />
			<Navbar />

			<Element name="hero">
				<Hero />
			</Element>

			<Banner />

			<main className="relative bg-[#171a26] overflow-hidden">
				<Aurora className="absolute top-0 left-0 w-screenh-full z-1" />

				<Element name="AboutDevcamp" className="relative z-10">
					<AboutDevcamp />
				</Element>
			</main>

			<main className="relative bg-[#171a26] overflow-hidden">
				<Element name="FeedCoverflow" className="relative z-10">
					<FeedCoverflow />
				</Element>
			</main>

			<main className="relative bg-[#171a26] overflow-hidden">

				<div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
					<Silk />
				</div>
				<WhyDevcamp />
			</main>

			<main className="relative bg-[#171a26] overflow-hidden">
				<Aurora className="absolute top-0 left-0 w-screenh-full z-1" />
				<Element name="Instructor" className="relative z-10">

					<Instructor />
				</Element>

			</main>

			<main className="relative bg-[#171a26] overflow-hidden">

				<Element name="MediaPartner" className="relative z-10">

					<MediaPartner />

				</Element>

			</main>

			<Footer />

		</>
	);
}
