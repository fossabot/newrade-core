import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    height: `max(80vh, 500px)`,
    width: `100%`,
    color: cssTheme.colors.colorIntents.primary,
    textShadow: cssTheme.effects.textShadows.light,
  })),
  callout: style(({ theme, cssTheme }: Theme) => ({
    height: `auto`,
  })),
  background: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
    backgroundColor: '#94aec5',
  })),
};
