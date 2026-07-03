import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
