/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/ramonhoyo/**'
      },

    ],
  },
};

export default nextConfig;
