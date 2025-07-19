/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/website-portfolio' : '', // No trailing slash
    assetPrefix: isProd ? '/website-portfolio' : '',
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;