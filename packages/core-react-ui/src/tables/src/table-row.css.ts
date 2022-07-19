import { style } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui-theme';

export const base = style({
  borderColor: colorVars.colors.grey['100'],
  borderWidth: '0px',
  borderBottomWidth: '1px',

  boxSizing: 'border-box',
  borderStyle: 'solid',
});
