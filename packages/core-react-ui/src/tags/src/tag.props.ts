import { TagProps } from '@newrade/core-design-system';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

export type TagCompProps = PrimitiveProps<'div'> &
  TagProps & {
    children?: any;
  };
