import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { LayoutDesignSystem, LayoutDocumentation } from '@newrade/core-gatsby-ui/src';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import MobileLogo from '../newrade-website/src/images/logo-symbol.svg';
import Logo from '../newrade-website/src/images/logo.svg';
import { Layout } from './src/layout/layout';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  if (!pageProps?.pageContext?.layout) {
    return <Layout {...pageProps}>{element}</Layout>;
  }

  switch (pageProps.pageContext.layout) {
    case 'DOCS': {
      return (
        <LayoutDocumentation DesktopSvgLogo={<Logo />} MobileSvgLogo={<MobileLogo />} {...pageProps}>
          {element}
        </LayoutDocumentation>
      );
    }
    case 'DESIGN_SYSTEM': {
      return (
        <LayoutDesignSystem DesktopSvgLogo={<Logo />} MobileSvgLogo={<MobileLogo />} {...pageProps}>
          {element}
        </LayoutDesignSystem>
      );
    }
    case 'SITE':
    default: {
      return <Layout {...pageProps}>{element}</Layout>;
    }
  }
};