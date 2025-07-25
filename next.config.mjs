/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['t3.ftcdn.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
