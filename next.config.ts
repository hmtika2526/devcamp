import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  cleanDistDir: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hmtika.web.id",
      },
      {
        protocol: "https",
        hostname: "cdn-2.hmtika.web.id",
      },
    ],
  },
};


export default nextConfig;
