/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages uses a subdirectory by default (e.g., /repo-name)
  // Uncomment and set this if deploying to a custom subdirectory
  // basePath: '/your-repo-name',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
