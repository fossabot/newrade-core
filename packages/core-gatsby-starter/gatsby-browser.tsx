import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { Layout } from './src/layouts/layout';
import { Providers } from './src/layouts/providers';

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    <Providers>
      <Layout {...props}>{element}</Layout>
    </Providers>
  );
};
