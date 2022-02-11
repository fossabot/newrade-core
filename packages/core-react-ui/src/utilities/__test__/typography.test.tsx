import { CapsizeTextStyle, TextStyle } from '@newrade/core-design-system';

import { defaultFallbackSansFonts, defaultSansFont } from '../../default-theme/default-fonts';
import { defaultBaseFontSize } from '../../default-theme/default-sizing';
import { defaultCSSTheme } from '../../default-theme/default-theme';
import { defaultTypography } from '../../default-theme/default-typography';
import { getCSSTextStyles } from '../text.utilities';
import { createCSSCapsizeTextStyle } from '../text-capsize.utilities';
import { getCSSTypography } from '../typography.utilities';

describe('typography utilities', () => {
  describe(`${createCSSCapsizeTextStyle.name}`, () => {
    it('should create a valid CSS typography object', () => {
      const textStyle: TextStyle & CapsizeTextStyle = {
        font: [defaultSansFont, ...defaultFallbackSansFonts],
        capHeight: 55,
        lineGap: 19,
      };
      expect(
        createCSSCapsizeTextStyle({ baseFontSize: defaultBaseFontSize, ...textStyle })
      ).toMatchSnapshot();
    });
  });

  describe(`${createCSSCapsizeTextStyle.name}`, () => {
    it('should respect the passed fontSize', () => {
      const textStyle: TextStyle & CapsizeTextStyle = {
        font: [defaultSansFont, ...defaultFallbackSansFonts],
        fontSize: 16,
        lineGap: 12,
      };
      const textStyleCSS = createCSSCapsizeTextStyle({
        baseFontSize: defaultBaseFontSize,
        ...textStyle,
      });
      expect(textStyleCSS.fontSize).toEqual(textStyle.fontSize?.toString());
    });
  });

  describe(`${getCSSTypography.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(
        getCSSTypography({ ...defaultTypography, baseFontSize: defaultBaseFontSize })
      ).toMatchSnapshot();
    });
  });

  describe(`${getCSSTextStyles.name}`, () => {
    it('should retrieve valid text styles', () => {
      expect(
        getCSSTextStyles({ ...defaultCSSTheme.typography.headings.desktop.h1 })
      ).toMatchSnapshot();
    });
  });
});
