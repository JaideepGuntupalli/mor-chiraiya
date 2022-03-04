module.exports = {
    pathPrefix: "/mor-chiraiya",
    siteMetadata: {
        title: `Mor-Chiraiya`,
        siteUrl: `https://www.mor-chiraiya.org`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/mor-chiraiya-logo.png",
            },
        },
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -100,
            },
        },
        "gatsby-plugin-postcss",
    ],
};
