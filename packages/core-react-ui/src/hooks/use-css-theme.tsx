import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { COLOR_MODE, COLOR_SCHEME, ColorModeProps, Variant } from '@newrade/core-design-system';

import { defaultTheme } from '../default-theme';
import { CSSRuntimeThemeConfig, CSSThemeProviderConfig } from '../design-system/css-theme-config';
import {
  GLOBAL_CSS_THEME_SCHEME,
  GLOBAL_CSS_THEME_SCHEME_REVERSED,
  LOCAL_STORAGE_CSS_THEME_NAME_PROP,
  LOCAL_STORAGE_CSS_THEME_SCHEME_PROP,
} from '../global/global-theme-classnames';
import { useIsSSR } from '../hooks/use-is-ssr';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities-components';
import { debugInstance, NS } from '../utilities-iso/log.utilities';

import { usePreferColorScheme } from './use-prefer-color-scheme';

const log = debugInstance(`${NS}:css-theme`);
const logWarn = debugInstance(`${NS}:css-theme:warn`);
const logError = debugInstance(`${NS}:css-theme:error`);

type CSSThemeContextType = {
  /**
   * The static configuration object set for each application
   */
  config: CSSThemeProviderConfig;
  /**
   * The selected theme
   */
  selected?: CSSRuntimeThemeConfig;
  /**
   * Callback to change the theme
   */
  onChangeTheme?: (themeName: string) => void;
};

type CSSThemeContextOptions = {
  /**
   * Option to apply the selected theme's classnames to the :root element (html)
   * @default false
   */
  applyThemeToRootElement?: boolean;
  /**
   * Apply theme classnames to provided element instead of the documentElement (html)
   * @default window.document.documentElement
   */
  rootElement?: HTMLElement | null;
  /**
   * Option to automatically save the last selected theme in local storage
   * @default false
   */
  syncToLocalStorage?: boolean;
};

export const defaultOptions: CSSThemeContextOptions = {
  applyThemeToRootElement: false,
  syncToLocalStorage: false,
};

export const defaultCSSThemeConfig: CSSThemeProviderConfig = {
  themes: [
    {
      name: defaultTheme.name,
      colorScheme: defaultTheme.colorScheme,
      className: 'global-css-theme-ze',
      default: true,
    },
  ],
};

/**
 * Context
 */
export const CSSThemeContext = React.createContext<CSSThemeContextType | undefined>(undefined);

CSSThemeContext.displayName = 'CSSThemeContext';

/**
 * Provider for CSSThemeContext
 */
export const CSSThemeProvider = function CSSThemeProvider({
  value,
  options,
  children,
}: {
  value: CSSThemeContextType;
  options?: CSSThemeContextOptions;
  children: ReactNode;
}) {
  const { applyThemeToRootElement, syncToLocalStorage, rootElement } = {
    ...defaultOptions,
    ...options,
  };
  const isSSR = useIsSSR();

  const { colorScheme } = usePreferColorScheme();
  const lastColorScheme = useRef<typeof colorScheme>(undefined);

  /**
   * Check if theme preference is already set in local storage
   */
  const localStorageThemeScheme = useRef<GLOBAL_CSS_THEME_SCHEME | null>(null);
  localStorageThemeScheme.current = isSSR
    ? null
    : (window.localStorage.getItem(LOCAL_STORAGE_CSS_THEME_SCHEME_PROP) as GLOBAL_CSS_THEME_SCHEME);
  const localStorageThemeName = useRef<string | null>(null);
  localStorageThemeName.current = isSSR
    ? null
    : window.localStorage.getItem(LOCAL_STORAGE_CSS_THEME_NAME_PROP);

  /**
   * Init internal context value
   */
  const [internalValue, setInternalValue] = useState<CSSThemeContextType | undefined>(
    value ? value : undefined
  );

  /**
   * Default handler for selected theme change
   */

  const themes = internalValue?.config.themes;
  const selectedTheme = internalValue?.selected;

  const handleChangeThemeName = useCallback(
    function handleChangeThemeName(themeName: string) {
      log(`changing theme to: ${themeName}`);
      const foundTheme = themes?.find((theme) => theme.name === themeName);
      const foundThemeSchemeClassName =
        foundTheme && foundTheme.colorScheme === COLOR_SCHEME.DARK
          ? GLOBAL_CSS_THEME_SCHEME.DARK
          : GLOBAL_CSS_THEME_SCHEME.LIGHT;
      if (foundTheme) {
        if (syncToLocalStorage) {
          window.localStorage.setItem(
            LOCAL_STORAGE_CSS_THEME_SCHEME_PROP,
            foundThemeSchemeClassName
          );
          window.localStorage.setItem(LOCAL_STORAGE_CSS_THEME_NAME_PROP, foundTheme.className);
        }
        setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundTheme });
      }
    },
    [syncToLocalStorage, internalValue, themes]
  );

  //
  // if a change handler is not set, use the default implementation
  //
  if (internalValue && !internalValue.onChangeTheme) {
    internalValue.onChangeTheme = handleChangeThemeName;
  }

  /**
   * Handle user's color scheme preference changes
   */
  useEffect(() => {
    //
    // only update if there are no selectedTheme
    //
    if (!selectedTheme) {
      return;
    }
    log(`previous user's device color scheme: ${lastColorScheme.current}`);
    log(`current user's device color scheme: ${colorScheme}`);

    if (!lastColorScheme.current && colorScheme !== lastColorScheme.current) {
      lastColorScheme.current = colorScheme;
      return;
    }

    if (colorScheme !== lastColorScheme.current) {
      lastColorScheme.current = colorScheme;
      log(`user's device color scheme has changed, it is now: ${colorScheme}`);

      log(`finding a theme with the new color scheme`);
      const foundThemeForColorSceme = themes?.find((theme) => theme.colorScheme === colorScheme);

      log(`found: ${foundThemeForColorSceme?.name}`);
      if (foundThemeForColorSceme) {
        if (
          internalValue?.selected &&
          internalValue.selected.name !== foundThemeForColorSceme.name
        ) {
          handleChangeThemeName(foundThemeForColorSceme.name);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme]);

  /**
   * Sync the external value with the internal's
   */
  useEffect(() => {
    if (value) {
      if (!internalValue) {
        log(`initial css theme context set`);
        setInternalValue(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, handleChangeThemeName]);

  /**
   * Sync the current value from localstorage
   */
  useEffect(() => {
    if (isSSR) {
      return;
    }

    const foundThemeByName = themes?.find(
      (theme) => theme.className === localStorageThemeName.current
    );
    const foundThemeByScheme = themes?.find((theme) => {
      if (localStorageThemeScheme.current === GLOBAL_CSS_THEME_SCHEME.LIGHT) {
        return theme.colorScheme === COLOR_SCHEME.LIGHT;
      }
      if (localStorageThemeScheme.current === GLOBAL_CSS_THEME_SCHEME.DARK) {
        return theme.colorScheme === COLOR_SCHEME.DARK;
      }
    });

    log(`loaded theme name from localstorage got: ${foundThemeByName?.name}`);
    log(`loaded theme scheme from localstorage got: ${foundThemeByScheme?.name}`);

    if (
      internalValue?.selected &&
      internalValue.selected.className !== localStorageThemeScheme.current
    ) {
      if (foundThemeByScheme) {
        log(`setting selected theme to: ${foundThemeByScheme.name}`);
        setInternalValue({ ...internalValue, selected: foundThemeByScheme });
      }
      return;
    }

    if (!internalValue?.selected) {
      //
      // if we have a previous theme set in local storage, and it is found in the themes list, we set it as selected
      //
      if (foundThemeByName) {
        log(`setting theme to: ${foundThemeByName.name}`);
        setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundThemeByName });
        return;
      }

      //
      // if we don't have a previous theme set in local storage, we take the first theme that matches the user's color scheme
      //

      log(`no previous theme selected, defaulting to : ${foundThemeByScheme?.name}`);
      setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundThemeByScheme });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSSR, localStorageThemeName.current, localStorageThemeScheme.current]);

  /**
   * Sync the selected theme with external changes
   */
  useEffect(() => {
    //
    // only update if the external selected is defined AND different from the internal one
    //
    if (!value.selected) {
      return;
    }

    if (value.selected.name !== internalValue?.selected?.name) {
      setInternalValue({ ...value, selected: value.selected });
      return;
    }

    if (!internalValue?.selected) {
      setInternalValue({ ...internalValue, selected: value.selected });
    }
  }, [internalValue, value, value?.selected]);

  /**
   * Handle context changes in DOM
   */
  useEffect(() => {
    if (!applyThemeToRootElement) {
      return;
    }

    if (isSSR) {
      return;
    }

    if (!internalValue?.selected?.className) {
      return;
    }
    const globalThemeClassNameToAdd = internalValue.selected.className;
    const globalThemeClassNamesToRemove = themes
      ?.filter((theme) => theme.name !== selectedTheme?.name)
      .map((theme) => theme.className);
    const element = rootElement ? rootElement : window.document.documentElement;

    //
    // update the global theme scheme classname
    //
    if (internalValue.selected.colorScheme === COLOR_SCHEME.LIGHT) {
      if (element.classList.contains(GLOBAL_CSS_THEME_SCHEME.DARK)) {
        element.classList.remove(GLOBAL_CSS_THEME_SCHEME.DARK);
      }
      element.classList.add(GLOBAL_CSS_THEME_SCHEME.LIGHT);
    }
    if (internalValue.selected.colorScheme === COLOR_SCHEME.DARK) {
      if (element.classList.contains(GLOBAL_CSS_THEME_SCHEME.LIGHT)) {
        element.classList.remove(GLOBAL_CSS_THEME_SCHEME.LIGHT);
      }
      element.classList.add(GLOBAL_CSS_THEME_SCHEME.DARK);
    }
    //
    // clean up classes from other themes
    //
    globalThemeClassNamesToRemove?.forEach((themeClassNameToRemove) => {
      if (element.classList.contains(themeClassNameToRemove)) {
        element.classList.remove(themeClassNameToRemove);
      }
    });
    //
    // add classname from selected theme
    //
    if (!element.classList.contains(globalThemeClassNameToAdd)) {
      log(`adding className: ${globalThemeClassNameToAdd}`);
      element.classList.add(globalThemeClassNameToAdd);
    }
  }, [
    isSSR,
    applyThemeToRootElement,
    themes,
    rootElement,
    internalValue?.selected?.colorScheme,
    internalValue?.selected?.className,
    selectedTheme?.name,
    value?.selected,
  ]);

  return <CSSThemeContext.Provider value={internalValue}>{children}</CSSThemeContext.Provider>;
};

/**
 * Hook to consume the context's value
 */
export function useCSSTheme() {
  const currentCSSTheme = React.useContext(CSSThemeContext);

  if (!currentCSSTheme) {
    logError('CSSThemeContext must be defined');
    throw new Error('CSSThemeContext must be defined');
  }

  /**
   * Utility function to find a light theme when the current is dark and vice versa
   */
  function getReversedCSSTheme() {
    if (!currentCSSTheme) {
      logError('CSSThemeContext must be defined');
      throw new Error('CSSThemeContext must be defined');
    }

    const reversedCSSTheme = currentCSSTheme.config.themes.find((theme) => {
      if (currentCSSTheme.selected?.colorScheme === COLOR_SCHEME.LIGHT) {
        return theme.colorScheme === COLOR_SCHEME.DARK;
      }
      if (currentCSSTheme.selected?.colorScheme === COLOR_SCHEME.DARK) {
        return theme.colorScheme === COLOR_SCHEME.LIGHT;
      }
    });
    const reversedCSSThemeConfig = reversedCSSTheme
      ? {
          ...currentCSSTheme,
          selected: reversedCSSTheme,
        }
      : undefined;

    if (reversedCSSThemeConfig) {
      return reversedCSSThemeConfig as CSSThemeContextType;
    }

    logWarn('no reversed theme found in your config');

    return currentCSSTheme;
  }

  /**
   * Utility function to find a light theme when the current is dark and vice versa
   */
  function getCSSThemeForScheme(scheme?: COLOR_SCHEME) {
    if (!currentCSSTheme) {
      throw new Error('CSSThemeContext must be defined');
    }

    if (!scheme) {
      return currentCSSTheme;
    }

    const specificColorScheme = currentCSSTheme.config.themes.find((theme) => {
      return theme.colorScheme === scheme;
    });
    const specificCSSThemeConfig = specificColorScheme
      ? {
          ...currentCSSTheme,
          selected: specificColorScheme,
        }
      : undefined;

    if (specificCSSThemeConfig) {
      return specificCSSThemeConfig as CSSThemeContextType;
    }

    return currentCSSTheme;
  }

  function getCSSColorModeClassnames({
    theme,
    variant,
    colorMode,
    colorScheme,
  }: Pick<CSSThemeSwitcherProps, 'theme' | 'variant' | 'colorMode' | 'colorScheme'>) {
    if (!currentCSSTheme) {
      throw new Error('CSSThemeContext must be defined');
    }

    const themeIsReversed = theme === 'reversed';
    const variantIsReversed = variant ? /reversed/gi.test(variant) : false;
    const colorModeIsReversed =
      colorMode === COLOR_MODE.REVERSED || themeIsReversed || variantIsReversed;

    const reversedCSSTheme = colorModeIsReversed ? getReversedCSSTheme() : currentCSSTheme;

    const colorSchemeIsForced = !!colorScheme;
    const forcedCSSTheme = colorSchemeIsForced
      ? getCSSThemeForScheme(colorScheme)
      : currentCSSTheme;

    if (colorSchemeIsForced) {
      const forcedClassnames = getMergedClassname([
        forcedCSSTheme.selected?.className,
        colorScheme === COLOR_SCHEME.LIGHT
          ? GLOBAL_CSS_THEME_SCHEME.LIGHT
          : GLOBAL_CSS_THEME_SCHEME.DARK,
      ]);

      return forcedClassnames;
    }

    if (colorModeIsReversed) {
      const reversedClassnames = getMergedClassname([
        reversedCSSTheme.selected?.className,
        GLOBAL_CSS_THEME_SCHEME_REVERSED,
      ]);

      return reversedClassnames;
    }

    return '';
  }

  return { currentCSSTheme, getReversedCSSTheme, getCSSThemeForScheme, getCSSColorModeClassnames };
}

type CSSThemeSwitcherProps = ColorModeProps &
  PrimitiveProps<'div'> & {
    variant?: Variant | null;
  };

/**
 * Component to reverse the current theme (e.g. on a 'light' theme app, reverse a section to 'dark' theme)
 * or force a specific color scheme
 */
export const CSSThemeSwitcher: FC<CSSThemeSwitcherProps> = function CSSThemeSwitcher({
  children,
  theme,
  variant,
  colorMode,
  colorScheme,
}) {
  /**
   *
   * CSS Themes
   *
   */

  const { currentCSSTheme, getReversedCSSTheme, getCSSThemeForScheme, getCSSColorModeClassnames } =
    useCSSTheme();

  const themeIsReversed = theme === 'reversed';
  const variantIsReversed = variant ? /reversed/gi.test(variant) : false;
  const colorModeIsReversed =
    colorMode === COLOR_MODE.REVERSED || themeIsReversed || variantIsReversed;

  const reversedCSSTheme = colorModeIsReversed ? getReversedCSSTheme() : currentCSSTheme;

  const colorSchemeIsForced = !!colorScheme;
  const forcedCSSTheme = colorSchemeIsForced ? getCSSThemeForScheme(colorScheme) : currentCSSTheme;

  const wrapperDivRef = useRef<HTMLDivElement>(null);

  if (colorSchemeIsForced) {
    const forcedClassnames = getMergedClassname([
      forcedCSSTheme.selected?.className,
      colorScheme === COLOR_SCHEME.LIGHT
        ? GLOBAL_CSS_THEME_SCHEME.LIGHT
        : GLOBAL_CSS_THEME_SCHEME.DARK,
    ]);

    return (
      <CSSThemeProvider
        value={forcedCSSTheme}
        options={{
          syncToLocalStorage: false,
          rootElement: wrapperDivRef.current,
          applyThemeToRootElement: !!wrapperDivRef.current,
        }}
      >
        <div className={forcedClassnames} ref={wrapperDivRef}>
          {children}
        </div>
      </CSSThemeProvider>
    );
  }

  if (colorModeIsReversed) {
    const reversedClassnames = getMergedClassname([
      reversedCSSTheme.selected?.className,
      GLOBAL_CSS_THEME_SCHEME_REVERSED,
    ]);

    return (
      <CSSThemeProvider
        value={reversedCSSTheme}
        options={{
          syncToLocalStorage: false,
          rootElement: wrapperDivRef.current,
          applyThemeToRootElement: !!wrapperDivRef.current,
        }}
      >
        <div className={reversedClassnames} ref={wrapperDivRef}>
          {children}
        </div>
      </CSSThemeProvider>
    );
  }

  return <>{children}</>;
};
