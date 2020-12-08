import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  justifyItems: 'center',
}));
