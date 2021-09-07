import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  /**
   * Sidebar
   */
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    left: 0,
    bottom: `-1px`,
    width: `90vw`,
    top: `-1px`,
    maxHeight: `calc(100vh)`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        width: cssTheme.layout.var.sidebarWidth,
      },
    },
    zIndex: cssTheme.layout.zIndex.sideBarMobile,
    overflowY: 'scroll',
    overflowX: 'hidden',

    color: cssTheme.colors.colorIntents.primaryText,
    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),

    WebkitOverflowScrolling: `touch`,

    transform: 'translateX(-100%)', // initial state for SSR
  })),

  /**
   * Backdrop
   */
  backdrop: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    backgroundColor: `rgba(0,0,0,0.20)`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: cssTheme.layout.zIndex.sideBarMobile - 1,

    opacity: `0`, // inital animation state
    pointerEvents: 'none',
  })),

  backdropActive: style(({ cssTheme, theme }: Theme) => ({
    pointerEvents: 'auto',
  })),
};

globalStyle(`${globalThemeReversedSelector} ${styles.wrapper}`, ({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colors.grey[800],
}));
