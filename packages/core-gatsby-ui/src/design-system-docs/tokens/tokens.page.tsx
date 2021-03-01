import { HEADING } from '@newrade/core-design-system';
import { CodeBlock, Heading, InputSelect, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';
import { liveCodeScope } from '../live-code-scope';
import { PageHeader } from '../utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  const scope = {
    ...liveCodeScope,
    cssTheme,
  };

  return (
    <>
      <PageHeader title={'Tokens'}></PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Colors</Heading>

        <InputSelect>
          <option value={'CSS'}>{'CSS'}</option>
          <option value={'SCSS'}>{'SCSS'}</option>
          <option value={'JSON'}>{'JSON'}</option>
        </InputSelect>

        <CodeBlock live={false} scope={scope} className={'language-scss'}>
          {`
$light-accent-grey-blue: #e8f8ff;
$light-accent-paper: #f7f5f5;
$light-accent-pink: #ad46d2;
$light-action-hover-dark: #086c97;
$light-action-hover-darken: rgba(0, 0, 0, 0.03);
$light-action-hover-light: #eef8fd;
$light-action-pressed-dark: #065070;
$light-action-pressed-light: rgba(13, 131, 180, 0.16);
$light-action-primary: #0a7db2;
$light-action-secondary: #aad4e6;
$light-background-2: #f0f2f4;
$light-background-hightlight-light: #eef9fa;
$light-background-hightlight-strong: #d0eff3;
$light-brand-grey: #414441;
$light-brand-red: #8f1736;
$light-grey-background-0: #ffffff;
$light-grey-background-1: #f8f9fa;
$light-grey-background-2: #dee2e6;
$light-grey-background-transparent: rgba(255, 255, 255, 0);
$light-grey-element-disabled: #e6e8eb;
$light-grey-element-primary: #252525;
$light-grey-element-secondary: #474a4d;
$light-grey-element-stroke-light: #e6e8eb;
$light-grey-element-stroke: #ced4da;
$light-grey-element-tertiary: #adb5bd;
$light-grey-element-transparent: rgba(255, 255, 255, 0.01);
$light-grey-element-white: #ffffff;
$light-greyscale-disabled: #dadee1;
$light-greyscale-forth: #e8ebed;
$light-greyscale-primary: #1b1b1b;
$light-greyscale-secondary: #3e3e3e;
$light-greyscale-tertiary: #737373;
$light-overlay-almost-visible: rgba(0, 0, 0, 0.05);
$light-overlay-light: rgba(0, 0, 0, 0.3);
$light-overlay-moderate: rgba(0, 0, 0, 0.5);
$light-overlay-strong: rgba(0, 0, 0, 0.7);
$light-overlay-subtile: rgba(0, 0, 0, 0.1);
$light-utility-info-background: #e6f5f9;
$light-utility-info-text: #0777a6;
$light-utility-info: #0079c4;
$light-utility-negative-background: rgba(255, 235, 230, 0.96);
$light-utility-negative-focus: rgba(216, 50, 24, 0.62);
$light-utility-negative-hover: #ffd3c7;
$light-utility-negative-pressed: rgba(255, 194, 179, 0.96);
$light-utility-negative-text: #851a00;
$light-utility-negative: #d3310a;
$light-utility-positive-background: #e7f6f0;
$light-utility-positive-text: #025d29;
$light-utility-positive: #0da566;
$light-utility-warning-background: #fefae6;
$light-utility-warning-text: #6c4600;
$light-utility-warning: #ffb833;`}
        </CodeBlock>
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
