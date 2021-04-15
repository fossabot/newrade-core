import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { ScaleSteps } from '../../../utils/scale-steps';

type Props = {};

export const SizingMobile: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <ScaleSteps steps={theme.sizing.sizes.mobile} />;
};