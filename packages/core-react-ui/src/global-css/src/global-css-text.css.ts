import { globalStyle } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui-theme';

globalStyle(`html, body`, {
  color: colorVars.colorIntents.primaryText,
});
