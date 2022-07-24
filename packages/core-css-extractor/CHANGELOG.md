# Change Log

All notable changes to this project will be documented in this file.

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/newrade/newrade-core/compare/@newrade/core-css-extractor@1.2.0...@newrade/core-css-extractor@2.0.0) (2022-07-24)

### Bug Fixes

- **core-cli:** cLI working, ESM module added to core-common,-figma-extractor, -css-extractor,-node
  ([3ad90d0](https://github.com/newrade/newrade-core/commit/3ad90d00b0def5e5818714fcdab45980afe867de))
- **core-figma-plugins:** fix build command
  ([f8d5181](https://github.com/newrade/newrade-core/commit/f8d5181558c322e9a2f53974d170ad391c82e477))
- **core-node-utils:** fix scripts being included in compilation
  ([6923b54](https://github.com/newrade/newrade-core/commit/6923b54a11b082bff0361f2257c93a1719cf4991))
- **core:** fix changelog duplicated header bug
  ([06b2343](https://github.com/newrade/newrade-core/commit/06b23436be341fe206290bedf4277409f1818a59))
- **core:** fix missing typecheck script
  ([7535d79](https://github.com/newrade/newrade-core/commit/7535d79ec858b2f68855cc73a03ce1afa525d192))
- **core:** fix triple reference (use path instead of types)
  ([f190508](https://github.com/newrade/newrade-core/commit/f1905086d46fb28854a41e453556ea0e630da510))
- **core:** fixes for treeshaking in gatsby sites
  ([e3035e9](https://github.com/newrade/newrade-core/commit/e3035e95ab66aa0240ae67383d84445233a73c23))
- **core:** refactor packages in progress (remove web frameworks)
  ([d3150d4](https://github.com/newrade/newrade-core/commit/d3150d42aacf2c6f15bd9eb923a23cf8cb5db046))
- **core:** refactor pkg commands and script to use swc
  ([42c0979](https://github.com/newrade/newrade-core/commit/42c097990217ff1b29b1a5644419530fcdd8ed24))
- **core:** remove case in favor of core-iso-utils and lodash-es
  ([0af5c0e](https://github.com/newrade/newrade-core/commit/0af5c0ef4815ad0d0deebede7504eecc3bf9af12))
- **core:** update dependencies (css-minimizer, webpac, jest-worker)
  ([ac7a3c1](https://github.com/newrade/newrade-core/commit/ac7a3c1ca67672a7a5b83bab28e2e3c1320e1e19))
- **core:** various fixes for core-react-ui components
  ([5892ed4](https://github.com/newrade/newrade-core/commit/5892ed4c402f738d9b7c29fecdacc4268711e985))

### Code Refactoring

- **core-react-ui:** refactor utilities
  ([596a5fa](https://github.com/newrade/newrade-core/commit/596a5faa1902b5f9c1afaec48821db31770f8a44))

### Features

- **core-figma-design-plugin:** new plugin
  ([1d49dfc](https://github.com/newrade/newrade-core/commit/1d49dfc0e289960f7ba5dbe1361e178ebda7df69))
- **core:** refactor monorepo with swc and remove preconstruct
  ([1ce9991](https://github.com/newrade/newrade-core/commit/1ce9991b0fc7788a830b89d22869180d80c08f8a))

### BREAKING CHANGES

- **core-react-ui:** check all imports using /utilities

# [1.2.0](https://github.com/newrade/newrade-core/compare/@newrade/core-css-extractor@1.1.0...@newrade/core-css-extractor@1.2.0) (2022-01-03)

### Bug Fixes

- **core:** set internal packages version to \* which means any version found locally
  ([70e0413](https://github.com/newrade/newrade-core/commit/70e0413057146e125018ba6d5f7781a9a1a329f5))

### Features

- **core-ui:** add colors for code syntax highlighting and simplify sizing variables exports
  ([7d1c447](https://github.com/newrade/newrade-core/commit/7d1c44723a8064037786c212310c45c2d7e9456d))

# 1.1.0 (2021-12-21)

### Bug Fixes

- **core-css-extractor:** fix for treat files
  ([8c5a6e3](https://github.com/newrade/newrade-core/commit/8c5a6e3551b39a97cbb2a399a51cff7a44d07c6e))

### Features

- **core-css-extractor:** new utility to extract css tokens from vanilla-extract styles
  ([567d698](https://github.com/newrade/newrade-core/commit/567d6984e197123c559b00cfdf62e516dda7e838))
