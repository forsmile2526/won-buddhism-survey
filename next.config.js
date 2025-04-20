/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/won-buddhism-survey',
  assetPrefix: '/won-buddhism-survey/',
}

module.exports = nextConfig 