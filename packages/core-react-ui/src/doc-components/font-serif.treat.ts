import { createStyleObject } from '@capsizecss/core';
import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';
import { getCSSTextStyles } from '@newrade/core-react-ui/utilities';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),
  lettersSansSerif: style(({ theme, cssTheme }: Theme) => ({
    ...createStyleObject({
      fontMetrics: theme.typography.fonts.serif[0].fontMetrics,
      capHeight: 80,
      lineGap: 10,
    }),
    fontFamily: theme.typography.fonts.serif[0].name,
  })),
  paragraphSerif: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontFamily: cssTheme.typography.fonts.serif,
  })),
  letters: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 400,
  })),
  lettersMedium: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 500,
  })),
  lettersBold: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 600,
  })),
};
