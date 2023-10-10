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
      hostname: "notion.so",
      port: "",
      pathname: "/image/**",
    },
  ],
};

module.exports = nextConfig;
