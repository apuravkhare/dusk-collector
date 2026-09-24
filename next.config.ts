import type { NextConfig } from "next";

const isProd = process.env.NODE_ONLY_PRODUCTION === 'production' || process.env.NODE_ENV === 'production';
const repoName = 'dusk-collector';


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for GitHub Pages static hosting
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js dynamic image optimization backend
  },
};

export default nextConfig;
