import { createStyleObject } from '@capsizecss/core';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';

export const base = style({
  fontFamily: typographyVars.titles.font,
  // position: 'relative', // 'relative' breaks useScrollSpy()
  wordBreak: 'normal',
  userSelect: 'text',
});

export const getVariantStyles = recipe({
  variants: {
    size: {
      h1: {
        ...createStyleObject(typographyVars.headings.mobile.h1.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.headings.tablet.h1.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.headings.desktop.h1.capsize
          ),
        },
      },
      h2: {
        ...createStyleObject(typographyVars.headings.mobile.h2.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.headings.tablet.h2.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.headings.desktop.h2.capsize
          ),
        },
      },
      h3: {
        ...createStyleObject(typographyVars.headings.mobile.h3.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.headings.tablet.h3.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.headings.desktop.h3.capsize
          ),
        },
      },
      h4: {
        ...createStyleObject(typographyVars.headings.mobile.h4.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.headings.tablet.h4.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.headings.desktop.h4.capsize
          ),
        },
      },
    },
    disableCapsize: {
      true: {
        '::before': {
          marginBottom: 'initial !important',
        },
        '::after': {
          marginTop: 'initial !important',
        },
      },
    },
  },
});

export type HeadingVariants = RecipeVariants<typeof getVariantStyles>;

export const enableAnchor = style({
  userSelect: 'text',
});

/**
 * Anchor for documentation pages
 */

// mdx-anchor-target will receive the :target pseudo selector
globalStyle(`${base} .mdx-anchor-target`, {
  visibility: 'hidden',
  userSelect: 'none',
  scrollSnapMarginTop: '40px', // ios only
  scrollMarginTop: '40px',
  width: 0,
});

// does not apply to footnotes inserted as sup (in markddown)
globalStyle(`:target:not(sup)`, {
  display: 'block',
  position: 'relative',
  top: '-40px',
  visibility: 'hidden',
});

globalStyle(`${base} .mdx-anchor`, {
  visibility: 'hidden',
  fontSize: '1em',
  marginLeft: '0.3em',
});

globalStyle(`${base}.mdx-anchor-sign-enable .mdx-anchor`, {
  visibility: 'visible',
});

globalStyle(`${base} .mdx-anchor-pound`, {
  visibility: 'hidden',
});

globalStyle(`${base}:hover.mdx-anchor-sign-enable .mdx-anchor-pound`, {
  visibility: 'visible',
});
