import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';

type Props = {};

export const CSSBouncingExit: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <CSSAnimation
        animation={{
          name: 'bounceOut',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce Out</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce Out Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce Out Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce Out Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce Out Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
