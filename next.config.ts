import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Fix old URL with spaces that was causing redirect errors
      {
        source: '/Industry We Serve',
        destination: '/industries',
        permanent: true,
      },
      // Removed dead-end pages that were causing 404s after redirect
    ]
  },
};

export default nextConfig;
