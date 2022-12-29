/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  resolve: {
    fallback: {
      util: true,
      // other fallback options...
    },
  },
};

module.exports = nextConfig;
