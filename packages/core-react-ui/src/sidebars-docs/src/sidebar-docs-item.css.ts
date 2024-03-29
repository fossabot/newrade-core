import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui-theme';

export const wrapper = style({
  position: 'relative',
  padding: `${sizeVars.x2} ${sizeVars.x2}`,
});

export const link = style({
  color: colorVars.colorIntents.secondaryText,
});

export const linkActive = style({
  color: colorVars.colorIntents.primary,
});
