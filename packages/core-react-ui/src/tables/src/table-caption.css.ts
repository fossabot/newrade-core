import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, typographyVars } from '@newrade/core-react-ui-theme';

export const base = style({
  paddingTop: `1em`,
  textAlign: 'center',
  captionSide: 'bottom',

  color: colorVars.colorIntents.primaryText,
  fontFamily: typographyVars.paragraphs.fontFamily,
  fontSize: typographyVars.paragraphs.mobile.small.capsize.fontSize,
  '@media': {
    [layoutCSS.media.tablet]: {
      fontSize: typographyVars.paragraphs.tablet.small.capsize.fontSize,
    },
    [layoutCSS.media.desktopSmall]: {
      fontSize: typographyVars.paragraphs.desktop.small.capsize.fontSize,
    },
  },
});
