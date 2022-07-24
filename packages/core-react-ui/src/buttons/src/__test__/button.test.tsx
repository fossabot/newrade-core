import React from 'react';

import { renderTest } from '@newrade/core-react-ui-utilities-test';

import { Button } from '../button.js';

describe('the button component', () => {
  it('should render correctly', () => {
    const { container } = renderTest(<Button>Hello world</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
