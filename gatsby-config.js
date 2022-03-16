module.exports = {
    pathPrefix: "/mor-chiraiya",
    siteMetadata: {
        title: `Mor-Chiraiya`,
        siteUrl: `https://www.mor-chiraiya.org`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-4LL9PM9LCM", // Google Analytics / GA
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // origin: "https://www.mor-chiraiya.org",
                },
            },
        },
        {
            resolve: "gatsby-plugin-brotli",
            options: {
                extensions: ["css", "html", "js", "svg", "webp"],
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
