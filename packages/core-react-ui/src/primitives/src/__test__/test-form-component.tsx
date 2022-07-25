import React from 'react';

import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

type Props = PrimitiveProps<'form'> & {
  customProp?: string;
};

export const TestFormComponent = React.forwardRef<HTMLFormElement, Props>(
  ({ customProp, as, ...props }, ref) => {
    return <Primitive as={'form'} ref={ref} classNames={['form-class']} {...props} />;
  }
);
