import { CSSButtons } from '@newrade/core-react-ui-css-design-system';

import { defaultCSSButtons } from '../../default-buttons-css.js';
import { setVarsValuesToStyleObject } from '../component.utilities.js';

describe('component utilities', () => {
  describe(`${setVarsValuesToStyleObject.name}`, () => {
    it(`should correctly replaced passed values in a style object`, () => {
      const modified = setVarsValuesToStyleObject<CSSButtons>(defaultCSSButtons, {
        variants: {
          primary: {
            borderColor: 'red',
          },
        },
      });

      expect(modified.variants.primary.borderColor).toEqual('red');
    });
  });
});
