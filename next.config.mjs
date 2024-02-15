/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: {
  //   ignoreDuringBuilds: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
}

export default nextConfig
