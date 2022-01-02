import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    userSelect: 'text',
  })),
  squareColor: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    padding: `${cssTheme.sizing.var.x3}`,
    display: 'flex',
    alignItems: 'center',
    boxShadow: cssTheme.effects.boxShadows.light,
    userSelect: 'auto',
  })),
};
