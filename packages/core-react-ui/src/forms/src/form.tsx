import React from 'react';

import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { sizeVars } from '@newrade/core-react-ui-theme';

import { Stack } from '../layout/stack.js';

type Props = PrimitiveProps<'form'>;

export const Form = React.forwardRef<any, Props>((props, ref) => {
  return (
    <Stack ref={ref} as={'form'} gap={[sizeVars.x3]} {...props}>
      {props.children}
    </Stack>
  );
});
