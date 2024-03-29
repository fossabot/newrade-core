import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { cssLoader } from './css-loader.js';
import { postCssLoader } from './post-css.loader.js';

export const extractCssLoader: RuleSetRule = {
  test: /\.(css)$/,
  exclude: /\.vanilla\.css$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    { ...cssLoader, options: { ...cssLoader.options, modules: false, importLoaders: 1 } },
    postCssLoader,
  ],
};

/**
 * @see https://vanilla-extract.style/documentation/setup/
 */
export const extractVanillaCssLibLoader: RuleSetRule = {
  test: /\.vanilla\.css$/i, // targets only CSS files generated by vanilla-extract
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      ...cssLoader,
      options: {
        ...cssLoader.options,
        modules: false,
        importLoaders: 1,
        sourceMap: false,
        url: false, // required as image imports should be handled via JS/TS import statements
      },
    },
    postCssLoader,
  ],
};

export const extractCssModuleLoader: RuleSetRule = {
  test: /module\.(css)$/,
  exclude: /\.vanilla\.css$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      ...cssLoader,
      options: {
        ...cssLoader.options,
        modules: true,
        importLoaders: 1,
        sourceMap: false,
        url: false, // required as image imports should be handled via JS/TS import statements
      },
    },
    postCssLoader,
  ],
};
