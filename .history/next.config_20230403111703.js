/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  {
    fs: false,
    path: false
  }
};

module.exports = nextConfig;
