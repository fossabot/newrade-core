import React from 'react';

import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import { useComposedRefs } from '../refs.hook.js';

const NAME = 'TestComponent';
const DEFAULT_TAG = 'div';

type Props = PrimitiveProps<'div' | 'span'> & {
  testCustomProp: string;
};

const TestComponent = React.forwardRef<HTMLDivElement, Props>(
  ({ testCustomProp, ...props }, forwardedRef) => {
    const testComponentRef = React.useRef<HTMLDivElement | HTMLSpanElement>(null);
    const ref = useComposedRefs(forwardedRef, testComponentRef);

    React.useEffect(() => {
      const current = testComponentRef.current;

      function handleEvent(event: Event) {
        if (current) {
          current.innerHTML = 'clicked';
        }
      }

      if (current) {
        current.addEventListener('click', handleEvent);
        return current.removeEventListener('click', handleEvent);
      }
    }, [testComponentRef]);

    return (
      <Primitive ref={ref} as={DEFAULT_TAG} data-test-custom-prop={testCustomProp} {...props} />
    );
  }
);

(TestComponent as React.NamedExoticComponent).displayName = NAME;

export { TestComponent };
