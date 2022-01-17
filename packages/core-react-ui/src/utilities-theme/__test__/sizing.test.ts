import { Sizing } from '@newrade/core-design-system';

import { defaultSizing } from '../../default-theme/default-sizing';
import { getCSSSizing } from '../sizing.utilities';

describe('shadows utilities', () => {
  describe(`${getCSSSizing.name}`, () => {
    it('should create a valid CSS box-shadow property', () => {
      const sizing = getCSSSizing(defaultSizing) as Sizing<string>;
      expect(sizing).toMatchSnapshot();
    });
  });
});
