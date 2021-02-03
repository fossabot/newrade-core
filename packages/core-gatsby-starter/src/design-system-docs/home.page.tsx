import { HEADING, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { useDocsNavItems } from '@newrade/core-gatsby-ui/src/';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src/components/gatsby-link';
import { Heading, Link, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../templates/design-system-page.template';
import * as styleRefs from './home.treat';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();
  const navItems = useDocsNavItems();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      {/* <TreatProvider theme={light}> */}
      <Heading variant={HEADING.h1}>
        Design System -{' '}
        <Heading variant={HEADING.h1} variantLevel={TEXT_LEVEL.secondary} displayMode={'inline-block'} as={'span'}>
          {title(cssTheme.variation)} Theme
        </Heading>
      </Heading>
      {/* </TreatProvider> */}

      <Stack id={'Foundations'} gap={[cssTheme.sizing.var.x5]}>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Paragraph>The design system describes every aspect of the visual design of a brand</Paragraph>

          {navItems.map((item, index) => {
            return (
              <Link key={index} variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={item.path} />}>
                {item.name}
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
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