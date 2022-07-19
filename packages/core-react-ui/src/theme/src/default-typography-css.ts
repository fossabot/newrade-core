import { getCSSTypographyV2 } from './utilities/typography-v2.utilities.js';
import { defaultTypography } from './default-typography.js';

export const defaultCSSTypography = getCSSTypographyV2({
  ...defaultTypography,
  baseFontSize: 16,
  vars: undefined,
});
