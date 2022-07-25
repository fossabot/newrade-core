import React, { useRef } from 'react';

import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { getMergedClassname } from '@newrade/core-react-ui-utilities-iso';

import { Stack } from '../layout-components/stack.js';

import * as styles from './desktop-docs-sidebar.css.js';

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
