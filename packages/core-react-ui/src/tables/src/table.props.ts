import { TableCellDSProps } from '@newrade/core-design-system';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

/**
 * Additional component-only state
 */
export type TableCellStateProps = {};

export type TableCellProps = PrimitiveProps<'td'> & TableCellDSProps & TableCellStateProps;
