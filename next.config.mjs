import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx', 'mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    domains: ['uploads-ssl.webflow.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "src/styles/main.scss";`
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};

export default nextConfig;
