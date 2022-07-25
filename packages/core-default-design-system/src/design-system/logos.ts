import { LOGO } from '@newrade/core-design-system';
import { LogoComponents } from '@newrade/core-react-ui';

import LogoFavicon from '../assets/logos/logo-favicon.svg.js.js';
import LogoStandard from '../assets/logos/logo-standard.svg.js.js';
import LogoSymbol from '../assets/logos/logo-symbol.svg.js.js';

export const logosComponents: LogoComponents<LOGO> = {
  [LOGO.STANDARD]: LogoStandard,
  [LOGO.SYMBOL]: LogoSymbol,
  [LOGO.FAVICON]: LogoFavicon,
  [LOGO.DEFS]: LogoStandard,
};
