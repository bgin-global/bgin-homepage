/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/events/block14',
        destination: '/events/20260301-block14',
        permanent: true, // 301 redirect (permanent)
      },
    ];
  },
};

module.exports = nextConfig;
