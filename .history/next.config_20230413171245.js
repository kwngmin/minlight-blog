/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "notion.so"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com",
      port: "",
      pathname: "/account123/**",
    },
  ],
};

module.exports = nextConfig;
