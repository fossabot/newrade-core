> **Note:** this README is available online at
> [zedesignsystem.com/core-docs/packages/core-react-ui/](https://zedesignsystem.com/core-docs/packages/core-react-ui/)

---

<div style="display: grid; width: fit-content; gap: 20px; grid-auto-flow: column;">
  <img height="30" src="/core-docs-assets/reactjs-logo-standard.svg"/>
</div>

## TODO

```
  "files": [
    "/dist",
    "/utilities-browser",
    "/utilities-iso",
    "/utilities-test",
    "/utilities-theme",
    "/utilities-vanilla-extract",
    "/global",
    "/default-theme",
    "/design-system",
    "/doc-components",
    "/theme",
    "/code",
    "/markdown",
    "/icons-kit-ionicons-outline"
  ],
  "dependencies": {
    "@capsizecss/core": "^3.0.0",
    "@capsizecss/metrics": "^0.1.0",
    "@capsizecss/vanilla-extract": "^1",
    "@newrade/core-common": "*",
    "@newrade/core-design-system": "*",
    "@newrade/core-jest-config": "*",
    "@newrade/core-types": "*",
    "@newrade/core-webpack-config": "*",
    "@newrade/core-website-api": "*",
    "@react-google-maps/api": "^2.1.1",
    "@react-spring/web": "^9.1.2",
    "@vanilla-extract/css": "^1.6.8",
    "@vanilla-extract/css-utils": "^0.1.2",
    "@vanilla-extract/private": "^1.0.3",
    "@vanilla-extract/recipes": "^0.2.3",
    "@vanilla-extract/sprinkles": "^1.3.3",
    "case": "^1",
    "cleave.js": "1.5.10",
    "csstype": "^3",
    "debug": "^4.3.1",
    "element-resize-detector": "^1.2.2",
    "github-slugger": "^1.4.0",
    "lethargy": "^1.0.9",
    "lodash": "^4",
    "polished": "^3.6.6",
    "prettier": "^2",
    "prism-react-renderer": "^1.2.0",
    "prismjs": "^1.23.0",
    "react": "18.0.0",
    "react-cache": "^2.0.0-alpha.1",
    "react-dom": "18.0.0",
    "react-icons": "^4.3.1",
    "react-use-gesture": "^9.1.3",
    "use-resize-observer": "^7.0.0"
  }
```

## How to Use

### Development

Normally you will want to start the development build from the root directory to
build all required core packages at once — but in some cases you might want to
build just a specific package.

```bash
yarn start
```

### Build

There is no need to build this package with `tsc` since it is consumed by
importing source files directly:

```bash
import { Button } from '@newrade/core-react-ui';
```

### Test

```bash
yarn test
```

## Features

TODO

## References

### Dependencies

| Name     | Url                                                       | Build Dependency | Run Time Dependency |
| -------- | --------------------------------------------------------- | ---------------- | ------------------- |
| polished | [polished](https://github.com/styled-components/polished) | yes              | no                  |
