import React, { CSSProperties, HTMLAttributes } from 'react';

import { Variant } from '@newrade/core-design-system';
import { kebab } from '@newrade/core-iso-utils';
import { sizeVars } from '@newrade/core-react-ui-theme';

import { Stack } from '../layout/stack.js';
import { Label } from '../text/label.js';

import * as styles from './shadow-swatch.css.js';

type OwnProps = HTMLAttributes<any> & {
  shadow?: string | string[];
  shadowStyle?: CSSProperties | undefined;
  name: string;
  size: number | string;
};

export const ShadowSwatch: React.FC<OwnProps> = ({
  id,
  style,
  className,
  shadow,
  shadowStyle,
  name,
  size,
  ...props
}) => {
  return (
    <Stack id={id} style={style} gap={[sizeVars.x3]} {...props}>
      <div
        className={styles.shadow}
        style={{ width: size, height: size, boxShadow: `${shadow}`, ...shadowStyle }}
      >
        {props.children}
      </div>

      <Label variantLevel={Variant.secondary}>{`${kebab(name)}`}</Label>
    </Stack>
  );
};
