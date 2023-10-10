/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "kwngmink.notion.site"],
  },
};

module.exports = nextConfig;
