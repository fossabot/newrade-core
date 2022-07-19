import { createGlobalTheme } from '@vanilla-extract/css';

import { typography } from '@newrade/core-design-system';
import { typographyVars } from '@newrade/core-react-ui/theme';
import { getCSSTypographyV2 } from '@newrade/core-react-ui-theme';

export const cssTypography = getCSSTypographyV2({
  ...typography,
  baseFontSize: 16,
});

createGlobalTheme(':root', typographyVars, cssTypography);
