import React from 'react';

import { HEADING } from '@newrade/core-design-system';
import { title } from '@newrade/core-iso-utils';
import { sizeVars, typographyVars } from '@newrade/core-react-ui-theme';
import { getCSSVarValue } from '@newrade/core-react-ui-utilities-browser';

import { Cluster } from '../layout/cluster.js';
import { Stack } from '../layout/stack.js';
import { Heading } from '../text/heading.js';

import * as styles from './font-serif.css.js';
import { sampleText } from './unicode-text.js';

type Props = {};

export const FontSerif: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack className={styles.wrapper} gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>{title(getCSSVarValue(typographyVars.fonts.serif))}</Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]}>
          <div className={`${styles.letters} ${styles.lettersSansSerif}`}>Aa</div>
          <div className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSansSerif}`}>
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSansSerif}`}>
            Aa
          </div>
        </Cluster>

        <p className={`${styles.paragraphSerif}`}>{sampleText}</p>
      </Stack>
    </Stack>
  );
};
