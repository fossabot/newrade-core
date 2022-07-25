import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { sizeVars } from '@newrade/core-react-ui-theme';

import { Stack } from '../layout/stack.js';

import * as styles from './code-outline.css.js';

type Props = PrimitiveProps;

export const CodeOutline: React.FC<Props> = ({ id, style, className, ...props }) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.preview],
    ...props,
  });

  return (
    <Stack gap={[sizeVars.x3]} {...commonProps}>
      {props.children}
    </Stack>
  );
};
