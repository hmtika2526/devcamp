// 'use client';
import '../assets/css/style.css';
import Link from 'next/link';

const FooterItem = [
    { name: 'HOME PAGE', url: 'https://hmtika.web.id' },
    { name: 'CDN', url: 'https://cdn.hmtika.web.id' },
    { name: 'CEK DOWN', url: 'https://checkdown.hmtika.web.id' },
    { name: 'DEVCAMP', url: 'https://devcamp.hmtika.web.id' },
    { name: 'DIGITAL SIGNATURE', url: 'https://digital-signature.hmtika.web.id' },
    { name: 'NEWS', url: 'https://news.hmtika.web.id' },
];


export default function Footer() {
    return (
        <footer className="bg-[#1b1e23] text-white px-4 py-[50px] md:px-16">

            <div className="flex flex-wrap sm:text-xl text-lg sm:flex-row justify-center font-semibold text-center">
                {FooterItem.map((item, index) => (
                    <Link
                        key={item.url}
                        href={item.url}
                        className="text-white font-bold"
                        target='_Blank'
                    >
                        {item.name}
                        {index < FooterItem.length - 1 && <span className="mx-2 text-white">-</span>}
                    </Link>
                ))}
            </div>


            <div className="text-center text-lg sm:text-2xl pt-4 text-white font-orbitron font-extrabold">
                <span className='mx-3'>{new Date().getFullYear()}</span>
                <Link href="https://instagram.com/hmtika.stb">@HMTIKA.STB</Link>
                    | All rights reserved.
            </div>
        </footer>
    );
}
