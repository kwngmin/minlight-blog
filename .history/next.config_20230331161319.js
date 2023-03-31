/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://image.unsplash.com"],
  },
};

module.exports = nextConfig;
