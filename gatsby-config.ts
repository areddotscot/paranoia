import type { GatsbyConfig, IPluginRefObject } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Paranoia`,
        siteUrl: `https://areddotscot-paranoia.github.io`
    },
    plugins: [
        "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        } as IPluginRefObject,
        "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        } as IPluginRefObject,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        } as IPluginRefObject,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                "montserrat\:300,400,400i,700" // you can also specify font weights and styles
              ],
              display: 'swap'
            }
          } as IPluginRefObject
    ]
};

export default config;
