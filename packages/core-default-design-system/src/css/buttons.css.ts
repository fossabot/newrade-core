import { createGlobalTheme } from '@vanilla-extract/css';

import { buttonsVars, defaultButtons, getCSSButtons } from '@newrade/core-react-ui-theme';

const cssButtons = getCSSButtons(defaultButtons);

createGlobalTheme(':root', buttonsVars, cssButtons);
