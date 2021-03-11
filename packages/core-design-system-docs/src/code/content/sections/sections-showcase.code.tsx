import { ButtonSize, Variant } from '@newrade/core-design-system/src';
import { BlockMarkdown, SectionShowcase } from '@newrade/core-gatsby-ui/src';
import { Button, CodeOutline, Heading, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../../utils/placeholder-markdown';

type Props = {};

export const SectionsShowCase: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <SectionShowcase
        section={{ variant: Variant.primaryReversed }}
        LeftBGBlock={
          <div
            style={{
              background: 'linear-gradient(130deg, #49a3e2, hsl(180deg 50% 60%))',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
        LeftTextBlock={
          <BlockMarkdown>
            <Heading>Lorem Ipsum</Heading>
            <PlaceholderMarkdown />
            <Button size={ButtonSize.large} variant={Variant.secondaryReversed}></Button>
          </BlockMarkdown>
        }
        RightBGBlock={
          <div
            style={{
              background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
        RightTextBlock={
          <BlockMarkdown>
            <Heading>Lorem Ipsum</Heading>
            <PlaceholderMarkdown />
            <Button size={ButtonSize.large} variant={Variant.secondaryReversed}></Button>
          </BlockMarkdown>
        }
      ></SectionShowcase>
    </CodeOutline>
  );
};