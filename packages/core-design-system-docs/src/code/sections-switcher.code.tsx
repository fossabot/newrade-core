import { BlockMarkdown, SectionSwitcher } from '@newrade/core-gatsby-ui/src';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../../core-gatsby-ui/src/docs-components/placeholder-markdown';

type Props = {};

export const SectionsSwitcher: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <SectionSwitcher
        LeftBlock={
          <BlockMarkdown>
            <PlaceholderMarkdown />
            <PlaceholderMarkdown />
          </BlockMarkdown>
        }
        RightBlock={
          <BlockMarkdown>
            <PlaceholderMarkdown />
            <PlaceholderMarkdown />
          </BlockMarkdown>
        }
      ></SectionSwitcher>
    </>
  );
};
