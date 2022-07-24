import { createGlobalTheme } from '@vanilla-extract/css';

import { sizingVars } from '@newrade/core-react-ui/theme';
import { getCSSSizingV2 } from '@newrade/core-react-ui-theme';
import { defaultSizing } from '@newrade/core-react-ui-theme';

export const cssSizing = getCSSSizingV2(defaultSizing);

createGlobalTheme(':root', sizingVars, cssSizing);
