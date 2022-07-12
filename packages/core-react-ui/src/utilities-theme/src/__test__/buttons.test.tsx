import { getCSSButtons } from '../../buttons.utilities.js';
import { defaultButtons } from '../../default-theme/src.js';

describe('buttons utilities', () => {
  describe(`${getCSSButtons.name}`, () => {
    it(`should generate CSS variable names for a given Colors object`, () => {
      const buttonsCSS = getCSSButtons(defaultButtons);
      expect(buttonsCSS).toMatchSnapshot();
    });
  });
});
