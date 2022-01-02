import React from 'react';
import { useStyles } from 'react-treat';

import { title } from 'case';

import { HEADING } from '@newrade/core-design-system';
import { Cluster, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';

import * as styleRefs from './font-sans.treat';

type Props = {};

const sampleText = `
ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*12345678910 $ 1 000 000 123,94$`;

export const FontSans: React.FC<Props> = (props) => {
  const { cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);

  return (
    <Stack className={styles.wrapper} gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x3]}>
        <Heading variant={HEADING.h4}>{title(cssTheme.typography.fonts.sans)}</Heading>

        <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x2]}>
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
