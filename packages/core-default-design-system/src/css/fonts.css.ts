import { createGlobalTheme } from '@vanilla-extract/css';

import { fontsVars } from '@newrade/core-react-ui/theme';
import { getCSSFontsObject } from '@newrade/core-react-ui-theme';
import { defaultTypography } from '@newrade/core-react-ui-theme';

const cssFonts = getCSSFontsObject(defaultTypography.fonts);

createGlobalTheme(':root', fontsVars, cssFonts);
