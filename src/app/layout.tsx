import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";
import "../assets/css/style.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'DEVCAMP HMTIKA',
    metadataBase: new URL("https://devcamp.hmtika.web.id"),
    description: 'From Idea to Interface — #Design It Code It, Launch It. Showcase your creativity through development and design.',
    icons: {
        icon: 'https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp',
    },
    keywords: ['DEVCAMP HMTIKA', 'web design', 'frontend bootcamp', 'HMTIKA UNDIP', 'nextjs', 'tailwind', 'typescript', 'creative coding', 'UI UX', 'devcamp 2025'],
    openGraph: {
        title: 'DEVCAMP HMTIKA',
        description: 'From Idea to Interface — #Design It Code It, Launch It',
        url: 'https://devcamp.hmtika.web.id',
        siteName: 'DEVCAMP HMTIKA',
        images: [
            {
                url: 'https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp',
                width: 1200,
                height: 630,
                alt: 'DEVCAMP HMTIKA Logo',
            },
        ],
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DEVCAMP HMTIKA',
        description: 'From Idea to Interface — #Design It Code It, Launch It',
        images: ['https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" /> */}
                <link rel="icon" href="https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp" type="image/webp" />
                <link rel="shortcut icon" href="https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp" type="image/webp" />
            </head>
            <body
                className={`${orbitron.variable} ${orbitron.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
