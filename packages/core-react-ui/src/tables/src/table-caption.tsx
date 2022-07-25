import React from 'react';

import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './table-caption.css.js';

type Props = PrimitiveProps<'caption'> & {};

export const TableCaption: React.FC<Props> = React.memo(({ children, ...props }) => {
  return (
    <Primitive as={'caption'} classNames={[styles.base]} {...props}>
      {children}
    </Primitive>
  );
});
