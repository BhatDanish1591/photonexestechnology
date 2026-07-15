import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/Industry We Serve',
        destination: '/industries',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
