import { createGlobalTheme } from '@vanilla-extract/css';

import { iconography } from '@newrade/core-design-system';
import { iconographyVars } from '@newrade/core-react-ui/theme';
import { getCSSIconography } from '@newrade/core-react-ui-theme';

const cssIconography = getCSSIconography(iconography);

createGlobalTheme(':root', iconographyVars, cssIconography);
