import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './main-wrapper.css.js';

type Props = PrimitiveProps & {};

/**
 * High level layout component to create a wrapper for the `<main/>` content
 * Should be used as close as possible to the `<body/>` element
 */
export const MainWrapper: React.FC<Props> = ({ id, style, className, as, ...props }) => {
  const type = as ? as : 'div';
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return React.createElement(type, commonProps);
};
