import { TableCellDSProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

/**
 * Additional component-only state
 */
export type TableCellStateProps = {};

export type TableCellProps = PrimitiveProps<'td'> & TableCellDSProps & TableCellStateProps;
