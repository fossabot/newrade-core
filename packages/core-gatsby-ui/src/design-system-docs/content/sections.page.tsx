import { HEADING } from '@newrade/core-design-system';
import {
  BoxV2,
  Center,
  Cluster,
  CodeBlock,
  Details,
  Grid,
  Heading,
  Paragraph,
  Stack,
  Summary,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { Placeholder } from '../utils/placeholder';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  const scope = {
    BoxV2,
    Center,
    Cluster,
    CodeBlock,
    Details,
    Grid,
    Heading,
    Paragraph,
    Stack,
    Summary,
    Switcher,
    Placeholder,
    cssTheme,
  };

  return (
    <>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h2}>Sections</Heading>

        <Paragraph>High level components to organize content in pages.</Paragraph>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Section</Heading>

        <Paragraph>Flex container with padding.</Paragraph>
        {/*
        <Section variant={'primary'}></Section>
        <Section variant={'secondary'}></Section>
        <Section variant={'secondary'}></Section> */}
      </Stack>
    </>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;