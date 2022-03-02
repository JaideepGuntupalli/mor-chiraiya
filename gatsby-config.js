module.exports = {
    siteMetadata: {
        title: `Mor-Chiraiya`,
        siteUrl: `https://www.mor-chiraiya.in`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/mor-chiraiya-logo.png",
            },
        },
        "gatsby-plugin-postcss",
    ],
};
