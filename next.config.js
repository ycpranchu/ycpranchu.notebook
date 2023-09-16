/**
 * @type {import('next').NextConfig}
 **/

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/ycpranchu.github.io" : "";

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    defaultShowCopyCode: true,
    latex: true,
    staticImage: true,

    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    basePath: assetPrefix,
});

module.exports = withNextra();