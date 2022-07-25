import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { sizeVars } from '@newrade/core-react-ui-theme';

import { Stack } from '../layout/stack.js';

import * as styles from './input-wrapper.css.js';

type Props = PrimitiveProps;

export const InputWrapper: React.FC<Props> = ({ id, style, className, ...props }) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return (
    <Stack gap={[sizeVars.x1]} {...commonProps}>
      {props.children}
    </Stack>
  );
};
