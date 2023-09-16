/**
 * @type {import('next').NextConfig}
 **/

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/ycpranchu.notebook" : "";

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    defaultShowCopyCode: true,
    latex: true,
    staticImage: true,
});

const nextConfig = {
    images: {
        unoptimized: true,
    },
    basePath: assetPrefix,
};

module.exports = {
    ...withNextra(),
    ...nextConfig,
};