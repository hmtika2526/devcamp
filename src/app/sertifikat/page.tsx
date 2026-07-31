import { Metadata } from 'next';
import SertifikatPageClients from "./pageClients";

// Generate static metadata for Sertifikat page
export const metadata: Metadata = {
  title: 'Sertifikat - DevCamp HMTIKA',
  description: 'Lihat dan download sertifikat peserta, mentor, dan panitia DevCamp HMTIKA. Tersedia dalam format PNG berkualitas tinggi.',
  keywords: ['sertifikat', 'devcamp', 'hmtika', 'certificate', 'download', 'peserta', 'mentor', 'panitia', 'web development'],
  authors: [{ name: 'HMTIKA' }],
  creator: 'HMTIKA',
  publisher: 'HMTIKA',
  
  // Open Graph
  openGraph: {
    title: 'Sertifikat - DevCamp HMTIKA',
    description: 'Lihat dan download sertifikat peserta, mentor, dan panitia DevCamp HMTIKA',
    url: 'https://devcamp.hmtika.web.id/sertifikat',
    siteName: 'DevCamp HMTIKA',
    images: [
      {
        url: 'https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp', // Recommended: 1200x630px
        width: 1200,
        height: 630,
        alt: 'Sertifikat DevCamp HMTIKA',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Sertifikat - DevCamp HMTIKA',
    description: 'Lihat dan download sertifikat DevCamp HMTIKA',
    images: 'https://devcamp.hmtika.web.id/assets/images/LOGO-HMTIKA.webp',
    creator: '@hmtika',
    site: '@hmtika',
  },

  // Additional meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Alternates
  alternates: {
    canonical: 'https://devcamp.hmtika.web.id/sertifikat',
  },

  // Verification (optional - sesuaikan dengan environment variables)
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function SertifikatPage() {
  return <SertifikatPageClients />;
}