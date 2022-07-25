import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { sizeVars } from '@newrade/core-react-ui-theme';

import { Cluster } from '../layout/cluster.js';
import { Label } from '../text/label.js';

import * as styles from './online-indicator.css.js';

type Props = PrimitiveProps & {
  status?: 'online' | 'offline' | 'loading';
};

export const OnlineIndicator: React.FC<Props> = ({
  id,
  style,
  className,
  status = 'loading',
  children,
  as,
  AsElement,
  ...props
}) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.status, status === 'online' ? styles.statusOnline : styles.statusOffline],
    ...props,
  });

  return (
    <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]} {...commonProps}>
      <div className={styles.statusDot}></div>
      <Label style={{ color: 'inherit' }}>{children || status}</Label>
    </Cluster>
  );
};
