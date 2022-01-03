import React from 'react';

import { NavbarLinkItem, NavbarModular, NavbarStandard } from '@newrade/core-gatsby-ui/src';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Navbars: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const left = (
    <>
      <NavbarLinkItem>Link</NavbarLinkItem>
      <NavbarLinkItem>Link</NavbarLinkItem>
      <NavbarLinkItem>Link</NavbarLinkItem>
    </>
  );

  return (
    <Stack gap={[sizeVars.x4]}>
      <NavbarModular navbarMode="normal" left={left} leftDesktop={left}></NavbarModular>

      <NavbarStandard navbarMode="normal" />
    </Stack>
  );
};
