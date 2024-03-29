import { style } from '@vanilla-extract/css';

import { sizeVars } from '@newrade/core-react-ui-theme';

export const wrapper = style({
  position: 'relative',
  padding: `${sizeVars.x2} 0`,
});

export const buttons = style({
  position: 'relative',
});
