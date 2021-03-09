import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  left: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    padding: `${cssTheme.sizing.var.x7} ${cssTheme.layout.var.contentMargins}`,
    maxWidth: '100%',
    justifySelf: 'flex-end',
    '@media': {
      [cssTheme.layout.media.tablet]: {
        maxWidth: '80ch',
        padding: `${cssTheme.sizing.var.x7} 0 ${cssTheme.sizing.var.x7} 0`,
      },
    },
  })),
  right: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    minHeight: `50vh`,
    maxWidth: '100%',
  })),
};