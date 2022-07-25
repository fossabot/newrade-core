import React from 'react';

import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './table-cell-header.css.js';

type Props = PrimitiveProps & { textStyle?: TEXT_STYLE; variant?: LABEL_SIZE };

/**
 * @description Render a td element using paragraph text
 * @type {React.FC<TableCellProps>}
 * @param {TableCellProps} props
 */
export const TableCellHeader: React.FC<Props> = React.memo(function TableCellHeader({
  variant = LABEL_SIZE.small,
  textStyle,
  ...props
}) {
  return (
    <Primitive
      as={'th'}
      classNames={[
        styles.variants({
          size: variant,
        }),
      ]}
      {...props}
    ></Primitive>
  );
});
