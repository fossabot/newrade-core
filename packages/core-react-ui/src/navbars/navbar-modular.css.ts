import { style } from '@vanilla-extract/css';

import { layoutCSS } from '@newrade/core-react-ui/theme';

export const mobile = style({
  display: 'grid',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'none',
    },
  },
});

export const desktop = style({
  display: 'none',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      display: 'grid',
    },
  },
});
