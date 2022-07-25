import React from 'react';

import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './table.css.js';

type Props = PrimitiveProps<'table'> & {};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * @see https://css-tricks.com/complete-guide-table-element/
 */
export const Table: React.FC<Props> = React.memo((props) => {
  return (
    <div className={styles.wrapper}>
      <Primitive as={'table'} classNames={[styles.table]} {...props}></Primitive>
    </div>
  );
});
