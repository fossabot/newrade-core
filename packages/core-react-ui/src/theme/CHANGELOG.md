# Change Log

All notable changes to this project will be documented in this file.

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2022-07-24)


### Bug Fixes

* **core-cli:** update lerna-version wrapper command to include all packages by default ([8e43674](https://github.com/newrade/newrade-core/commit/8e436744321ce8fb595a13ad70740f54b170ab25))
* **core-design-system:** refactor default theme files ([16857f6](https://github.com/newrade/newrade-core/commit/16857f6eac775a8a05050d365b04e8e1cc7c181d))
* **core-react-ui:** fix bug in treat files ([c0eff40](https://github.com/newrade/newrade-core/commit/c0eff40b3f6bee77a4d5ed8f218725f4c8f534c5))
* **core-react-ui:** fixes for core-react-ui-* sub packages ([931cbc2](https://github.com/newrade/newrade-core/commit/931cbc274708ace824bd4346cf0280a4984d2196))
* **core-react-ui:** fixes for more packages ([1eaeb4c](https://github.com/newrade/newrade-core/commit/1eaeb4c96570c67a82503e0933f3679c95e73ae9))
* **core-react-ui:** refactor theming selection ([92c8d03](https://github.com/newrade/newrade-core/commit/92c8d0330b858702131191539d77282e621c8e4e))
* **core-ui:** fixes for various components ([85730cf](https://github.com/newrade/newrade-core/commit/85730cf86c907409d6f5a98c436bc63c9c2bc390))
* **core-ui:** improvements for theming selection and organization ([5a49a03](https://github.com/newrade/newrade-core/commit/5a49a03bdf9d0a5c571906745f4594e400ed09f0))
* **core-ui:** upgrade capsize related code ([522a9bd](https://github.com/newrade/newrade-core/commit/522a9bdebcda87ee6f9b6078a6147f0901f68372))
* **core-webpack-config:** fix ts-loader config for vanilla files ([9bd0507](https://github.com/newrade/newrade-core/commit/9bd050727a6d1f067850df2391a0561e57ea72b8))
* **core:** fix config files for gatsby ([5f495d0](https://github.com/newrade/newrade-core/commit/5f495d071b5e8f078d7be39f2618ecc57905273b))
* **core:** fixes for fork-ts-checker and ts-loader config ([3ae9b37](https://github.com/newrade/newrade-core/commit/3ae9b37fb43e12cf9d375fb85cea6d81f6efbecd))
* **core:** remove case in favor of core-iso-utils and lodash-es ([0af5c0e](https://github.com/newrade/newrade-core/commit/0af5c0ef4815ad0d0deebede7504eecc3bf9af12))
* **core:** update tsconfig for webpack packages (apps) and add jest snap command ([9df2c53](https://github.com/newrade/newrade-core/commit/9df2c53312796d05804c64b7f5303a1d4729ac09))
* **core:** upgrade vanilla extract setup ([60e559d](https://github.com/newrade/newrade-core/commit/60e559d40f877739d4c2c21403f2ba55f131b0d2))


### Code Refactoring

* **core-react-ui:** refactor utilities ([596a5fa](https://github.com/newrade/newrade-core/commit/596a5faa1902b5f9c1afaec48821db31770f8a44))


### Features

* **core-css-extractor:** new utility to extract css tokens from vanilla-extract styles ([567d698](https://github.com/newrade/newrade-core/commit/567d6984e197123c559b00cfdf62e516dda7e838))
* **core-react-ui:** improve theme-wrapper ([dcc5cc8](https://github.com/newrade/newrade-core/commit/dcc5cc88024f6227e4a11db27233d18631159fa4))
* **core-react-ui:** rework theming and remove reverse color mode (will use React.Context) ([75b0ceb](https://github.com/newrade/newrade-core/commit/75b0cebc0c7066370a9617b763857ee6761ea088))
* **core-ui:** add colors for code syntax highlighting and simplify sizing variables exports ([7d1c447](https://github.com/newrade/newrade-core/commit/7d1c44723a8064037786c212310c45c2d7e9456d))
* **core-ui:** add new capabilities to the docs engine with documentation.js (extract jsdoc) ([c8df57e](https://github.com/newrade/newrade-core/commit/c8df57e9aaeb72525848d2e2eb13a046137e2be8))
* **core:** adding new components ([a122348](https://github.com/newrade/newrade-core/commit/a1223488c070672a10e2121047154a8666a8987e))
* **gatsby:** upgrade to webpack v5 and gastby v3 ([457d1b8](https://github.com/newrade/newrade-core/commit/457d1b83a84f4416be2adf3a659df6737adcfa87))


### BREAKING CHANGES

* **core-react-ui:** check all imports using /utilities
* **gatsby:** webpack v5 and gatsby v3
