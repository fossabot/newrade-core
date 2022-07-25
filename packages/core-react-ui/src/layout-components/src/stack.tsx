import React from 'react';

import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import { GapProp } from '../props/layout.prop.js';

import * as styles from './stack.css.js';

type Tag = 'ol' | 'ul' | 'div' | 'nav' | 'form' | 'footer';

type Props = PrimitiveProps<Tag> &
  Partial<{
    gap: GapProp;
  }>;

export const Stack = React.forwardRef<any, Props>(function Stack(
  { style, as, classNames, gap = ['0px'], ...props } = {},
  ref
) {
  const [mobileGap, tabletGap, desktopGap] = gap;

  const customStyle = {
    ...style,
    // @ts-ignore
    '--mobile-gap': mobileGap,
    '--tablet-gap': tabletGap || mobileGap,
    '--desktop-gap': desktopGap || tabletGap || mobileGap,
  };

  return (
    <Primitive
      as={as}
      classNames={[styles.base, ...(classNames || [])]}
      style={customStyle}
      {...props}
      ref={ref}
    />
  );
});
