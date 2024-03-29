> **Note:** this README is available online at
> [https://zedesignsystem.com/core-docs/](https://zedesignsystem.com/core-docs/packages/core-cli/)

---

**Note:** This document is autogenerated by `oclif` when publishin occur.

For more info, check the oclif documentation on publishing:
https://oclif.io/docs/releasing

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

---

## Content

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @newrade/core-cli
$ nr COMMAND
running command...
$ nr (--version)
@newrade/core-cli/1.16.0 darwin-arm64 node-v16.15.1
$ nr --help [COMMAND]
USAGE
  $ nr COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`nr commit`](#nr-commit)
* [`nr css-extract`](#nr-css-extract)
* [`nr depcheck [ARGS]`](#nr-depcheck-args)
* [`nr figma-sync [PATH]`](#nr-figma-sync-path)
* [`nr gatsby [COMMAND]`](#nr-gatsby-command)
* [`nr git-clean-branches`](#nr-git-clean-branches)
* [`nr git-copy-labels SOURCE DESTINATION`](#nr-git-copy-labels-source-destination)
* [`nr globby [ARGS]`](#nr-globby-args)
* [`nr hello [WORD]`](#nr-hello-word)
* [`nr help [COMMAND]`](#nr-help-command)
* [`nr jest [ARGS]`](#nr-jest-args)
* [`nr jest-watch [ARGS]`](#nr-jest-watch-args)
* [`nr lerna-version [ARGS]`](#nr-lerna-version-args)
* [`nr local-ip [ARGS]`](#nr-local-ip-args)
* [`nr micromatch [PATH] [PATTERN]`](#nr-micromatch-path-pattern)
* [`nr vercel-deploy`](#nr-vercel-deploy)
* [`nr webpack [COMMAND]`](#nr-webpack-command)

## `nr commit`

call the commit script in the repo root

```
USAGE
  $ nr commit

DESCRIPTION
  call the commit script in the repo root

EXAMPLES
  $ nr commit
```

_See code: [dist/commands/commit.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/commit.js)_

## `nr css-extract`

Create CSS tokens (plain .css files) from Vanilla-extract styles definition files (*.css.ts)

```
USAGE
  $ nr css-extract

DESCRIPTION
  Create CSS tokens (plain .css files) from Vanilla-extract styles definition files (*.css.ts)

EXAMPLES
  $ nr css-extract
```

_See code: [dist/commands/css-extract.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/css-extract.js)_

## `nr depcheck [ARGS]`

Shortcut to run depcheck

```
USAGE
  $ nr depcheck [ARGS]

DESCRIPTION
  Shortcut to run depcheck

EXAMPLES
  $ nr depcheck
```

_See code: [dist/commands/depcheck.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/depcheck.js)_

## `nr figma-sync [PATH]`

sync design tokens from figma file

```
USAGE
  $ nr figma-sync [PATH] [-t] [-h]

ARGUMENTS
  PATH  relative output path

FLAGS
  -h, --help  Show CLI help.
  -t, --test  the test flag is used in integration tests, it will not output versions or dates

DESCRIPTION
  sync design tokens from figma file

EXAMPLES
  $ nr figma-sync
```

_See code: [dist/commands/figma-sync.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/figma-sync.js)_

## `nr gatsby [COMMAND]`

Shortcut to run Gatsby with typescript (ts-node)

```
USAGE
  $ nr gatsby [COMMAND] [--no-uglify] [--verbose] [--inspect] [-p <value>] [-H <value>]

FLAGS
  -H, --host=<value>  gatsby host option
  -p, --port=<value>  gatsby port option
  --inspect           gatsby inspect command
  --no-uglify         gatsby --no-uglify flag
  --verbose           gatsby verbose command

DESCRIPTION
  Shortcut to run Gatsby with typescript (ts-node)

EXAMPLES
  $ nr gatsby build
```

_See code: [dist/commands/gatsby.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/gatsby.js)_

## `nr git-clean-branches`

delete local branches that are already merged on origin

```
USAGE
  $ nr git-clean-branches [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  delete local branches that are already merged on origin

EXAMPLES
  $ nr git-clean-branches
```

_See code: [dist/commands/git-clean-branches.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/git-clean-branches.js)_

## `nr git-copy-labels SOURCE DESTINATION`

copy labels from a repo to another

```
USAGE
  $ nr git-copy-labels [SOURCE] [DESTINATION] [-h]

ARGUMENTS
  SOURCE       source repo <org-name>/<repo-name>
  DESTINATION  destination repo <org-name>/<repo-name>

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  copy labels from a repo to another

EXAMPLES
  $ nr git-copy-labels
```

_See code: [dist/commands/git-copy-labels.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/git-copy-labels.js)_

## `nr globby [ARGS]`

Execute globby as CLI

```
USAGE
  $ nr globby [ARGS]

DESCRIPTION
  Execute globby as CLI

EXAMPLES
  $ nr globby
```

_See code: [dist/commands/globby.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/globby.js)_

## `nr hello [WORD]`

Test command to verify that the CLI build is valid.

```
USAGE
  $ nr hello [WORD]

DESCRIPTION
  Test command to verify that the CLI build is valid.

EXAMPLES
  $ condohub hello world
```

_See code: [dist/commands/hello.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/hello.js)_

## `nr help [COMMAND]`

display help for nr

```
USAGE
  $ nr help [COMMAND] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all  see all commands in CLI

DESCRIPTION
  display help for nr
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.3.1/src/commands/help.ts)_

## `nr jest [ARGS]`

Shortcut to run jest with typescript (ts-node)

```
USAGE
  $ nr jest [ARGS] [--config <value>]

FLAGS
  --config=<value>  [default: jest.config.ts] path to jest config file

DESCRIPTION
  Shortcut to run jest with typescript (ts-node)

EXAMPLES
  $ nr jest
```

_See code: [dist/commands/jest.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/jest.js)_

## `nr jest-watch [ARGS]`

Shortcut to run jest with typescript (ts-node)

```
USAGE
  $ nr jest-watch [ARGS] [--config <value>]

FLAGS
  --config=<value>  [default: jest.config.ts] path to jest config file

DESCRIPTION
  Shortcut to run jest with typescript (ts-node)

EXAMPLES
  $ nr jest
```

_See code: [dist/commands/jest-watch.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/jest-watch.js)_

## `nr lerna-version [ARGS]`

Wrapper for lerna version command, allowing to run version on specific packages

```
USAGE
  $ nr lerna-version [ARGS] [--packages <value>]

FLAGS
  --packages=<value>  packages glob to be included in lerna version bump, e.g. --packages=packages/*

DESCRIPTION
  Wrapper for lerna version command, allowing to run version on specific packages

EXAMPLES
  $ nr lerna-version
```

_See code: [dist/commands/lerna-version.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/lerna-version.js)_

## `nr local-ip [ARGS]`

Print out local machine ip on the connected network

```
USAGE
  $ nr local-ip [ARGS]

DESCRIPTION
  Print out local machine ip on the connected network

EXAMPLES
  $ nr local-ip
```

_See code: [dist/commands/local-ip.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/local-ip.js)_

## `nr micromatch [PATH] [PATTERN]`

Execute micromatch as CLI

```
USAGE
  $ nr micromatch [PATH] [PATTERN]

DESCRIPTION
  Execute micromatch as CLI

EXAMPLES
  $ nr micromatch
```

_See code: [dist/commands/micromatch.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/micromatch.js)_

## `nr vercel-deploy`

deploy site with vercel using env variables

```
USAGE
  $ nr vercel-deploy [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  deploy site with vercel using env variables

EXAMPLES
  $ nr vercel-deploy
```

_See code: [dist/commands/vercel-deploy.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/vercel-deploy.js)_

## `nr webpack [COMMAND]`

Shortcut to run webpack with typescript (ts-node)

```
USAGE
  $ nr webpack [COMMAND] [-c <value>] [--no-client-overlay] [--inspect-brk]

FLAGS
  -c, --config=<value>  path to config file (.ts)
  --inspect-brk         enable node --inspect-brk flag
  --no-client-overlay   disable the full-screen overlay in the browser when there are compiler errors or warnings

DESCRIPTION
  Shortcut to run webpack with typescript (ts-node)

EXAMPLES
  $ nr webpack serve --config webpack.dev.config.ts
```

_See code: [dist/commands/webpack.js](https://github.com/newrade/newrade-core/blob/v1.16.0/dist/commands/webpack.js)_
<!-- commandsstop -->
