/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/abhie-sheik/nextjs-blogposts/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
