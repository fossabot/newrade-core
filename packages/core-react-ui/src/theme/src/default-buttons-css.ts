import { CSSButtons } from '@newrade/core-react-ui-css-design-system';

import { getCSSButtons } from './utilities/buttons.utilities.js';
import { defaultButtons } from './default-buttons.js';

export const defaultCSSButtons: CSSButtons = getCSSButtons(defaultButtons);
