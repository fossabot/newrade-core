# Change Log

All notable changes to this project will be documented in this file.

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.2.0](https://github.com/newrade/newrade-core/compare/@newrade/core-types@2.1.0...@newrade/core-types@2.2.0) (2022-07-24)

### Bug Fixes

- **core-cli:** cLI working, ESM module added to core-common,-figma-extractor, -css-extractor,-node
  ([3ad90d0](https://github.com/newrade/newrade-core/commit/3ad90d00b0def5e5818714fcdab45980afe867de))
- **core-figma-plugins:** fix build command
  ([f8d5181](https://github.com/newrade/newrade-core/commit/f8d5181558c322e9a2f53974d170ad391c82e477))
- **core:** fix build packages (contentful and website-api)
  ([a6b8ba9](https://github.com/newrade/newrade-core/commit/a6b8ba9f17125bfc6c73f61afc1460747c253cd8))
- **core:** fix changelog duplicated header bug
  ([06b2343](https://github.com/newrade/newrade-core/commit/06b23436be341fe206290bedf4277409f1818a59))
- **core:** fix triple reference (use path instead of types)
  ([f190508](https://github.com/newrade/newrade-core/commit/f1905086d46fb28854a41e453556ea0e630da510))
- **core:** refactor packages in progress (remove web frameworks)
  ([d3150d4](https://github.com/newrade/newrade-core/commit/d3150d42aacf2c6f15bd9eb923a23cf8cb5db046))
- **core:** refactor pkg commands and script to use swc
  ([42c0979](https://github.com/newrade/newrade-core/commit/42c097990217ff1b29b1a5644419530fcdd8ed24))

### Features

- **core-figma-design-plugin:** new plugin
  ([1d49dfc](https://github.com/newrade/newrade-core/commit/1d49dfc0e289960f7ba5dbe1361e178ebda7df69))
- **core-platform:** init nextjs based platform
  ([0ee2532](https://github.com/newrade/newrade-core/commit/0ee25322594ab317f1feddc1196c2afe6d9cbce9))
- **core:** refactor monorepo with swc and remove preconstruct
  ([1ce9991](https://github.com/newrade/newrade-core/commit/1ce9991b0fc7788a830b89d22869180d80c08f8a))

# [2.1.0](https://github.com/newrade/newrade-core/compare/@newrade/core-types@2.0.1...@newrade/core-types@2.1.0) (2021-12-21)

### Features

- **core-css-extractor:** new utility to extract css tokens from vanilla-extract styles
  ([567d698](https://github.com/newrade/newrade-core/commit/567d6984e197123c559b00cfdf62e516dda7e838))

## [2.0.1](https://github.com/newrade/newrade-core/compare/@newrade/core-types@2.0.0...@newrade/core-types@2.0.1) (2021-08-31)

### Bug Fixes

- **core:** add ls-lint
  ([76728ca](https://github.com/newrade/newrade-core/commit/76728ca9b5e340d7587f596e3e4ca373e788ca91))
- **core:** big cleanup of unnecessary tsconfig files
  ([36cbad5](https://github.com/newrade/newrade-core/commit/36cbad539a31dc00c8ab7cf12e6a1916692917a7))
- **core:** fix ls-lint config
  ([bb554f2](https://github.com/newrade/newrade-core/commit/bb554f2427845dc80b0cc0d4493874fac539cb5e))
- **core:** fix typecheck command
  ([4bab26c](https://github.com/newrade/newrade-core/commit/4bab26c27b1f679dc8376b84347aa94d2d235eea))
- **core:** various fixes for core packages targeting documentation & core docs update
  ([3ce203f](https://github.com/newrade/newrade-core/commit/3ce203fbbc073394a71adcad1979cc1ef1031903))

# [2.0.0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.6.0...@newrade/core-types@2.0.0) (2021-07-12)

### Features

- **gatsby:** upgrade to webpack v5 and gastby v3
  ([457d1b8](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/457d1b83a84f4416be2adf3a659df6737adcfa87))

### BREAKING CHANGES

- **gatsby:** webpack v5 and gatsby v3

# [1.6.0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.5.2...@newrade/core-types@1.6.0) (2021-07-03)

### Bug Fixes

- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **core-design-system-docs:** init package
  ([224064a](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/224064a713a5f41f998fe1e8e18ea4bfbe8b048d))
- **core-github-actions:** setup build for actions with webpack
  ([b8980c0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/b8980c001cebd394a3e030eca584e6f88b19df13))
- **core-react-app:** fix types references
  ([594baec](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/594baecc7cad830c5e080cfa32461a40b99bd1c4))
- **newrade-website:** clean up
  ([9534e61](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/9534e61b01545371bde739d05c4519ead5fbd143))
- **newrade-website:** docs update
  ([08db9ce](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/08db9ce60c3779684db9260c435792e532bd6729))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **ts:** fix last non strict packages
  ([ce1a8cb](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/ce1a8cbf6b459f1f0e0510d4df0c2885eb0d60d6))
- **vsb-website:** fix build issues
  ([11fd560](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/11fd56082bd6eb576f5a7309b419611467a1850d))

### Features

- **core-gatsby-ui:** introduce blocks
  ([19e0b02](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/19e0b0225fe06e3b3a68a30a7bae052f9325732a))
- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **core-react-ui:** add img-downloader component
  ([b7f89c8](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/b7f89c812ccecb97dab7e99cb31169fe8118bdfd))
- **core-react-ui:** fix design system pages
  ([062d175](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/062d175e705eeecd8dd00a4bb95d4240c556f6b9))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **gatsby:** upgrade to latest v2 gatsby
  ([6ccfd11](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/6ccfd11efe789383353be0cd3b5a251e22a8f41a))
- **logging:** implement structured loggging
  ([713cb45](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/713cb4501897b14ff3d53c93d32bce0686759a7c))
- **vsb-api:** add error handling for auth0
  ([0941709](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/094170962aee78d608bafe7c8aae70ebc16713fe))
- **vsb-api:** add i18n translation service
  ([76ae02f](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/76ae02fa4bc15c744b5d2629267bda27b66d9403))
- **vsb-api:** trying to deploy to netlify
  ([3943583](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/394358395408463b83b8140e662ffe6062109f64))
- **vsb-website:** accordions for faq section
  ([a19e65f](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/a19e65f39193a849186c41ab2c1dcfad157e3724))
- **vsb-website:** fixes list items
  ([1cda7d1](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/1cda7d1276c520dc8ad470880b9755407d300338))

## [1.5.1](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.5.0...@newrade/core-types@1.5.1) (2021-06-16)

### Bug Fixes

- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))

# [1.5.0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.4.0...@newrade/core-types@1.5.0) (2021-05-21)

### Bug Fixes

- **core-github-actions:** setup build for actions with webpack
  ([b8980c0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/b8980c001cebd394a3e030eca584e6f88b19df13))

### Features

- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **vsb-api:** add error handling for auth0
  ([0941709](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/094170962aee78d608bafe7c8aae70ebc16713fe))

# [1.4.0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.3.2...@newrade/core-types@1.4.0) (2021-03-09)

### Bug Fixes

- **core-design-system-docs:** init package
  ([224064a](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/224064a713a5f41f998fe1e8e18ea4bfbe8b048d))
- **newrade-website:** clean up
  ([9534e61](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/9534e61b01545371bde739d05c4519ead5fbd143))
- **newrade-website:** docs update
  ([08db9ce](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/08db9ce60c3779684db9260c435792e532bd6729))

### Features

- **gatsby:** upgrade to latest v2 gatsby
  ([6ccfd11](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/6ccfd11efe789383353be0cd3b5a251e22a8f41a))

## [1.3.2](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.3.1...@newrade/core-types@1.3.2) (2021-02-22)

### Bug Fixes

- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))

## [1.3.1](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.3.0...@newrade/core-types@1.3.1) (2021-02-19)

**Note:** Version bump only for package @newrade/core-types

# [1.3.0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.2.0...@newrade/core-types@1.3.0) (2021-02-15)

### Features

- **logging:** implement structured loggging
  ([713cb45](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/713cb4501897b14ff3d53c93d32bce0686759a7c))
- **vsb-api:** trying to deploy to netlify
  ([3943583](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/394358395408463b83b8140e662ffe6062109f64))

# [1.2.0](https://github.com/newrade/newrade-core/tree/master/packages/core-common/compare/@newrade/core-types@1.1.0...@newrade/core-types@1.2.0) (2021-02-11)

### Features

- **core-react-ui:** fix design system pages
  ([062d175](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/062d175e705eeecd8dd00a4bb95d4240c556f6b9))

# 1.1.0 (2021-02-03)

### Bug Fixes

- **core-react-app:** fix types references
  ([594baec](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/594baecc7cad830c5e080cfa32461a40b99bd1c4))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **ts:** fix last non strict packages
  ([ce1a8cb](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/ce1a8cbf6b459f1f0e0510d4df0c2885eb0d60d6))
- **vsb-website:** fix build issues
  ([11fd560](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/11fd56082bd6eb576f5a7309b419611467a1850d))

### Features

- **core-gatsby-ui:** introduce blocks
  ([19e0b02](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/19e0b0225fe06e3b3a68a30a7bae052f9325732a))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **vsb-api:** add i18n translation service
  ([76ae02f](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/76ae02fa4bc15c744b5d2629267bda27b66d9403))
- **vsb-website:** accordions for faq section
  ([a19e65f](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/a19e65f39193a849186c41ab2c1dcfad157e3724))
- **vsb-website:** fixes list items
  ([1cda7d1](https://github.com/newrade/newrade-core/tree/master/packages/core-common/commit/1cda7d1276c520dc8ad470880b9755407d300338))
