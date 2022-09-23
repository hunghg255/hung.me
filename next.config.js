/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    minimumCacheTTL: 99999999,
    formats: ['image/avif', 'image/webp'],
    domains: ['mabyusbucket.s3.ap-southeast-1.amazonaws.com'],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  headers: async function headers() {
    if (process.env.NODE_ENV === 'development') return [];
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|otf|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
