import React from 'react';

import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './table-header.css.js';

type Props = PrimitiveProps<'thead'> & {};

export const TableHeader: React.FC<Props> = React.memo(function TableHeader(props) {
  return (
    <Primitive
      as={'thead'}
      classNames={
        [
          // styles.variants({
          //   variant: variantLevel,
          //   size: variant,
          // }),
        ]
      }
      {...props}
    ></Primitive>
  );
});
