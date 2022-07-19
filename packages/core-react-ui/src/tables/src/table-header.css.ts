import { style } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui-theme';

export const base = style({
  backgroundColor: colorVars.colors.grey[25],

  '::after': {
    content: 'none',
  },
  '::before': {
    content: 'none',
  },
});
