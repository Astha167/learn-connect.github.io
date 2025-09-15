/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // export as static HTML (for GitHub Pages)
  basePath: "/learn-connect.github.io", // repo name
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Image Optimization
  },
};

module.exports = nextConfig;
