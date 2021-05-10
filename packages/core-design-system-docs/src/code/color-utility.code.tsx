import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ColorUtility: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <ColorPalette
        colorName={'Utility Green'}
        colorOrPalette={theme.colors.colors.utilityGreen}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Yellow'}
        colorOrPalette={theme.colors.colors.utilityYellow}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Red'}
        colorOrPalette={theme.colors.colors.utilityRed}
      ></ColorPalette>
    </Stack>
  );
};
