---
name: Sections
description: High-level components to render pages.
tags:
  - test
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { SectionsDivider } from '../../src/code/sections-divider.code'; 
import SectionsDividerCode from '!!raw-loader!../../src/code/sections-divider.code.tsx';
import { SectionsPrimaryReversed } from '../../src/code/sections-primary-reversed.code'; 
import SectionsPrimaryReversedCode from '!!raw-loader!../../src/code/sections-primary-reversed.code.tsx';
import { SectionsPrimary } from '../../src/code/sections-primary.code'; 
import SectionsPrimaryCode from '!!raw-loader!../../src/code/sections-primary.code.tsx';
import { SectionsSecondary } from '../../src/code/sections-secondary.code';
import SectionsSecondaryCode from '!!raw-loader!../../src/code/sections-secondary.code.tsx';
import { SectionsSwitcher } from '../../src/code/sections-switcher.code'; 
import SectionsSwitcherCode from '!!raw-loader!../../src/code/sections-switcher.code.tsx';
import { SectionsBanner } from '../../src/code/sections-banner.code'; 
import SectionsBannerCode from '!!raw-loader!../../src/code/sections-banner.code.tsx';
import { SectionsCallOut } from '../../src/code/sections-callout.code'; 
import SectionsCallOutCode from '!!raw-loader!../../src/code/sections-callout.code.tsx';
import { SectionsStatement } from '../../src/code/sections-statement.code';
import SectionsStatementCode from '!!raw-loader!../../src/code/sections-statement.code.tsx';
import { SectionsShowCase } from '../../src/code/sections-showcase.code'; 
import SectionsShowCaseCode from '!!raw-loader!../../src/code/sections-showcase.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

Sections are high level components to organize content in pages. They have
predefined layouts, each in a dedicated components. Content inside Sections
should always be contained in one of the Blocks.

## Base Section Component

<!-- The base <Code>{`<Section/>`}</Code> component handles props that all other sections use. Those are: -->

### Examples

<SectionsPrimary />
<CodeBlock>{SectionsPrimaryCode}</CodeBlock>

<SectionsPrimaryReversed />
<CodeBlock>{SectionsPrimaryReversedCode}</CodeBlock>

<SectionsSecondary />
<CodeBlock>{SectionsSecondaryCode}</CodeBlock>

## Section Components

### The "Switcher"

2 columns layout that becomes 1 on mobile.

<SectionsSwitcher />
<CodeBlock>{SectionsSwitcherCode}</CodeBlock>

### The "Divider"

2 columns layout with the right one having no padding.

<SectionsDivider />
<CodeBlock>{SectionsDividerCode}</CodeBlock>

### The "Banner"

1 background image with a centered block.

<SectionsBanner />
<CodeBlock>{SectionsBannerCode}</CodeBlock>

### The "CallOut"

1 section with a background image who's adapted itself to section height.

<SectionsCallOut />
<CodeBlock>{SectionsCallOutCode}</CodeBlock>

### The "Statement"

1 top block full width followed with multiple blocks inline.

<SectionsStatement />
<CodeBlock>{SectionsStatementCode}</CodeBlock>

### The "Show Case"

Like the CallOut with more than one block.

<SectionsShowCase />
<CodeBlock>{SectionsShowCaseCode}</CodeBlock>