/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages uses a subdirectory by default (e.g., /repo-name)
  basePath: '/the-wellbeing-corner',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
