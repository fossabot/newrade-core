import { createGlobalTheme } from '@vanilla-extract/css';

import { layout } from '@newrade/core-design-system';
import { layoutVars } from '@newrade/core-react-ui/theme';
import { getCSSLayoutV2 } from '@newrade/core-react-ui-theme';

export const cssLayout = getCSSLayoutV2(layout);

createGlobalTheme(':root', layoutVars, cssLayout);
