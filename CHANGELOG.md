# Change Log

All general changes to the repo or main dependencies will be documented in this file.

Please note that this file is written **manually** where as other changelogs in `/packages/` are automated.

# 2022 March Update - #1 - (2022-03)

## Features

- update to contentful models

## Fixes

- fixes for new Button.tsx
- added variables in theme for Buttons

## Refactoring

- move `NavbarModular` to `core-react-ui` package

--

# 2022 Jan Update - #1 - (2022-01)

## Breaking changes

- remove `ListItem` in favor of ListItemV2
- rename `variantSize` in favor of `size` for all components
- remove unneccessary `HTMLAttributes` type in props (already included in Primitive typings)
- rename props for the `<Button/>` component
- remove `getCSSTextStyles`
- remove `createCSSTheme` in favor of `createCSSThemeV2`
- remove deprecated props from Colors, Typography
- remove DesignSystem (V1) in favor of V2

## Features

## Fixes

--

# 2021 Oct Update - #1 - (2021-10)

## Breaking changes

- remove `import loadable from '@loadable/component';` for React v18
- remove `core.getGatsbyPluginLoadableComponents()`
- remove `gatsby-plugin-loadable-components-ssr`
- upgrade capsize `from 'capsize'` to `from '@capsizecss/core'`

## Features

## Fixes

- fixes for auto-rename tag settings

```json
    //
    // auto-rename plugins
    //
    "auto-rename-tag.activationOnLanguage": [
      "xml",
      "javascript",
      "typescript",
      "javascriptreact",
      "typescriptreact"
    ]
```

# 2021 Sept Update - #1 - (2021-09)

## Breaking changes

- remove .env at root requirements and move ENV variable to specific core-cli command

## Features

- add windows compatibility (rimraf, crossenv etc)

## Fixes

---

# 2021 August Update - #1 - (2021-08-26)

## Breaking changes

## Features

## Fixes

- refactor dependencies (no more devDeps) + moving deps to packages
- remove `gatsby-plugin-ts-config` for the `nr gatsby` command

---

# 2021 July Update - #3 - (2021-07-xx)

## Todos

- [ ] refactor desktop-navbar-\* components as navbar-\*
- [ ] all component should have a line height set

## Fixes

## Features

# 2021 July Update - #2 - (2021-07-18)

## Breaking changes

- Remove old `<NavBar/>` component
- Renamed `<NavItem/>` component to `<SidebarItem/>`
- Renamed `<NavItemGroup/>` component to `<SidebarItemGroup/>`
- Renamed `<TagStatus/>` component to `<Badge/>`
- `frontmatter?.name` is now `frontmatter?.title`
- removed the following components from `core-gatsby-ui` index:

```ts
export * from './docs-components/color-palette';
export * from './docs-components/color-swatch-dark';
export * from './docs-components/font-showcase';
export * from './docs-components/icon-box';
export * from './docs-components/icons';
export * from './docs-components/logo-placeholder';
export * from './docs-components/loren-ipsum';
export * from './docs-components/page-header';
export * from './docs-components/placeholder';
export * from './docs-components/placeholder-markdown';
export * from './docs-components/reversed-box';
export * from './docs-components/scale-steps';
export * from './docs-components/shadow-swatch';
export * from './layout/design-system-lazy.layout';
export * from './layout/docs-lazy.layout';
export * from './mdx/docs-mdx-components';
```

- removed `config/gatsby-plugin-sharp.conf.ts (git)`
- removed gatsby-plugin-pages.conf.ts (no longer needed)
- updated plugin

```ts
    ...core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
    }),
```

## Fixes

- Consume core-react-ui with /src/ intead of compiled lib because of issues with Treat and Vanilla-Extract (see
  [issue](https://github.com/seek-oss/vanilla-extract/issues/231))

## Features

- Added SidebarAPI
- Added LinkRenderer
- Added SidebarRenderer
- New hook to update the document background color `useUpdateDocumentColor()`

# 2021 July Update - #1 - (2021-07-08)

## Breaking changes

### Webpack

- **webpack:** upgrade to webpack v5 ()

rename import `webpack/declarations/WebpackOptions` to `webpack`

change import `import { WebpackOptions } from 'webpack';` to

`import { Configuration } from 'webpack';`

### Gatsby

replaced https://github.com/Js-Brecht/gatsby-plugin-ts-config with
https://github.com/cometkim/gatsby-plugin-typegen/tree/master/plugin

remove gatsby from .env

use

````

flags: conf.gatsbySiteFlags,

```

instead.
```
````
