import React from 'react';
import { useStyles } from 'react-treat';
import { Heading } from '../heading';
import { Illustration } from '../ui/illustration';
import { Paragraph } from '../paragraph';

import * as styleRefs from './info-section-type-6.treat';

type OwnProps = SectionFragment;

export const InfoSectionType6: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.type ? styles[props.type] : ''}`} key={props.title}>
      <Illustration className={`${styles.illustration}`} name={`Illustration/${props.illustration}`} />

      <Heading variant="h3" className={styles.title}>
        {props.title}
      </Heading>
      <Paragraph variant={'small'} className={styles.text}>
        {props.text}
      </Paragraph>
    </div>
  );
};
