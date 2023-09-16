const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    defaultShowCopyCode: true,
    latex: true,
    staticImage: true,
});

module.exports = {
    ...withNextra()
};