import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  width: '100%',
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px} ${theme.sizing.sizes.x7}`,
}));

export const container = style((theme: DesignSystem) => ({
  display: 'grid',
  gap: theme.sizing.sizes.x4,
  justifyItems: 'stretch',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  margin: `${theme.sizing.sizes.x5} 0`,
  padding: `0 ${theme.layout.contentMargins.mobile.px}`,
  maxWidth: '100%',
  overflowX: 'auto',
  '@media': {
    [theme.layout.media.tabletPlus]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  justifySelf: 'center',
  margin: `0 0 ${theme.sizing.sizes.x5} 0`,
  padding: `0 ${theme.layout.contentMargins.mobile.px}`,
  maxWidth: '500px',
}));

export const paragraph = style((theme: DesignSystem) => ({
  textAlign: 'center',
  padding: `${theme.sizing.sizes.x3} ${theme.layout.contentMargins.mobile.px} ${theme.sizing.sizes.x5}`,
}));

export const fullPreview = style((theme: DesignSystem) => ({
  display: 'grid',
  gap: theme.sizing.sizes.x5,
}));

export const contentFeaturedPost = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${theme.sizing.sizes.x5}`,
  '@media': {
    [theme.layout.media.tabletPlus]: {
      flexDirection: 'row',
    },
  },
}));

export const contentRecentPost = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: `${theme.sizing.sizes.x5}`,
  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    },
  },
}));

export const recentPreview = style((theme: DesignSystem) => ({}));
