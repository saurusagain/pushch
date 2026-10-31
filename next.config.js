/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/idch.json',
        destination: '/api/idch',
      },
    ];
  },
};

module.exports = nextConfig;
