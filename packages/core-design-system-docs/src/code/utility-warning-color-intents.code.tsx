import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
type Props = {};

export const UtilityWarningColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          warningText: theme.colors.colorIntents.warningText,
        }}
      ></ColorPalette>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          warningAction: theme.colors.colorIntents.warningAction,
        }}
      ></ColorPalette>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          warningBackground: theme.colors.colorIntents.warningBackground,
        }}
      ></ColorPalette>
    </Stack>
  );
};
