import { Auth0Provider } from '@auth0/auth0-react';
import {
  GlobalCSSVariables,
  GlobalResetCSS,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/lib/default-theme';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
  return (
    <Auth0Provider
      domain="vsb.us.auth0.com"
      clientId="ODPesjvgqM6lZDXrs8co3mLotcjv58UN"
      redirectUri={window.location.origin}
      scope="read:current_user update:current_user_metadata read:patients"
    >
      <TreatProvider theme={light}>
        <ViewportProvider context={viewportContext}>
          <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
            <GlobalCSSVariables>
              <GlobalResetCSS>{props.children}</GlobalResetCSS>
            </GlobalCSSVariables>
          </TreatThemeProvider>
        </ViewportProvider>
      </TreatProvider>
    </Auth0Provider>
  );
};