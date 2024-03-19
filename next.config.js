/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    backendurl: "https://backend-two-blue.vercel.app",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
