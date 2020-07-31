import Gatsby from 'gatsby';

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

function getGatsbySourceGraphQLPlugin({
  typeName,
  fieldName,
  url,
}: {
  typeName: string;
  fieldName: string;
  url: string;
}): Gatsby.PluginRef {
  return {
    resolve: `gatsby-source-graphql`,
    options: {
      typeName,
      fieldName,
      url,
    },
  };
}

export const config: Gatsby.GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `An example site.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import 'mir-diez/build/diez-mir-diez-web/static/styles.scss';`,
        cssLoaderOptions: {
          localIdentName: '[name]_[local]_[hash:base64:5]',
        },
      },
    },
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `types/graphql-types.ts`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: process.env.GRAPH_CMS_API_URL_MIR,
        headers: {
          Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_MIR}`,
        },
      },
    },
  ],
};

export default config;