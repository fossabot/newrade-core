import React from 'react';

import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { getMergedClassname } from '@newrade/core-react-ui-utilities-iso';

import * as styles from './markdown.css.js';

type Props = PrimitiveProps;

/**
 * Applies CSS on md/mdx elements.
 */
export const MarkdownCSS: React.FC<Props> = ({ id, style, className, ...props }) => {
  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <div id={id} style={style} className={classNames}>
      {props.children}
    </div>
  );
};
