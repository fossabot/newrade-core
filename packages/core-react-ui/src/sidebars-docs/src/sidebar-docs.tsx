import React, { useRef } from 'react';

import { getMergedClassname } from '@newrade/core-react-ui-utilities-iso';

import { Stack } from '../layouts/stack.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './sidebar-docs.css.js';

type Props = PrimitiveProps & {};

/**
 * Desktop Sidebar that floats near the content.
 */
export const DesktopDocsSideBar: React.FC<Props> = ({ id, style, className, ...props }) => {
  const classNames = getMergedClassname([className, styles.wrapper]);

  /**
   * Animation
   */
  const sideBarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <nav className={classNames} ref={sideBarRef} style={style}>
        <Stack className={styles.content}>{props.children}</Stack>
      </nav>
    </>
  );
};
