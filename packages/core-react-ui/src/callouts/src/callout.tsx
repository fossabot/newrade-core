import React from 'react';

import { ICON } from '@newrade/core-design-system';
import { IconComp } from '@newrade/core-react-ui-icons';
import { useCommonProps } from '@newrade/core-react-ui-primitives';
import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './callout.css.js';

type Props = PrimitiveProps<'div'> & {
  kind: 'positive' | 'warn' | 'negative';
};

export const Callout: React.FC<Props> = ({ kind, children, as, ...props }) => {
  const commonProps = useCommonProps<'div'>({
    classNames: [styles.base],
    ...props,
  });

  return (
    <Primitive classNames={[styles.base]} {...props}>
      <IconComp name={ICON.CHECKMARK_CIRCLE} />
      <div className={styles.doStyle}>{children}</div>
    </Primitive>
  );
};
