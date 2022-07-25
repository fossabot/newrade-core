import React from 'react';

import { HEADING } from '@newrade/core-design-system';
import { title } from '@newrade/core-iso-utils';
import { sizeVars, typographyVars } from '@newrade/core-react-ui-theme';
import { getCSSVarValue } from '@newrade/core-react-ui-utilities-browser';

import { Cluster } from '../layout/cluster.js';
import { Stack } from '../layout/stack.js';
import { Heading } from '../text/heading.js';

import * as styles from './font-sans.css.js';
import { sampleText } from './unicode-text.js';

type Props = {};

export const FontSans: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <Heading variant={HEADING.h4}>{title(getCSSVarValue(typographyVars.fonts.sans))}</Heading>

        <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]}>
          <div className={`${styles.letters} ${styles.lettersSans}`}>Aa</div>
          <div className={`${styles.letters} ${styles.lettersMedium} ${styles.lettersSans}`}>
            Aa
          </div>
          <div className={`${styles.letters} ${styles.lettersBold} ${styles.lettersSans}`}>Aa</div>
        </Cluster>

        <p className={`${styles.paragraphSans}`}>{sampleText}</p>
      </Stack>
    </Stack>
  );
};
