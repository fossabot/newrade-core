import { createGlobalTheme } from '@vanilla-extract/css';

import { effectsVars } from '@newrade/core-react-ui/theme';
import { getCSSEffects } from '@newrade/core-react-ui-theme';
import { defaultEffects } from '@newrade/core-react-ui-theme';

/**
 *
 * Light theme
 *
 */

const cssEffects = getCSSEffects(defaultEffects);

createGlobalTheme(':root', effectsVars, cssEffects);
