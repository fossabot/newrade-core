import { Variant } from '@newrade/core-design-system';
import { Placeholder } from '@newrade/core-gatsby-ui/src/docs-components/placeholder';
import { Button, CSSTransition, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React, { useState } from 'react';

type Props = {};

export const TransitionColors: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const [isRun, setRun] = useState<boolean>(false);

  function ClickReRun(event: React.MouseEvent<any>) {
    event.preventDefault();
    setRun(true);
  }

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <Button variant={Variant.primary} onClick={ClickReRun}>
        Run
      </Button>

      <CSSTransition animation={'fadeOut'}>
        <Placeholder>Fade Out</Placeholder>
      </CSSTransition>
    </Stack>
  );
};
