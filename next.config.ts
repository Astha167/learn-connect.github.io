/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // export as static HTML for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Image Optimization
  },
  basePath: "", // ✅ empty for user site (Astha167.github.io)
  assetPrefix: isProd ? "/" : "",
};

module.exports = nextConfig;
