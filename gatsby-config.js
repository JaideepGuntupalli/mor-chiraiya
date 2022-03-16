module.exports = {
    pathPrefix: "/mor-chiraiya",
    siteMetadata: {
        title: `Mor-Chiraiya`,
        siteUrl: `https://www.mor-chiraiya.org`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-brotli",
            options: {
                extensions: ["css", "html", "js", "svg", "png", "jpg"],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/mor-chiraiya-logo.webp",
            },
        },
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -100,
            },
        },
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-plugin-minify`,
            options: {
                minifyCSS: false,
            },
        },
    ],
};
