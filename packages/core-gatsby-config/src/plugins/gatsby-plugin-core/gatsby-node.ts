import { GatsbyNode } from 'gatsby';
import { createPagesFunction, onCreatePageFunction } from './src/create-pages';
import { onCreateBabelConfigFunction } from './src/on-create-babel-config';
import { onCreateWebpackConfigFunction } from './src/on-create-webpack-config';
import { onPreBootstrapFunction } from './src/on-pre-bootstrap';

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = onPreBootstrapFunction;
export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = onCreateBabelConfigFunction;
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = onCreateWebpackConfigFunction;
export const createPages: GatsbyNode['createPages'] = createPagesFunction;
export const onCreatePage: GatsbyNode['onCreatePage'] = onCreatePageFunction;
// export const onCreateNode: GatsbyNode['onCreateNode'] = onCreateNodeFunction;
