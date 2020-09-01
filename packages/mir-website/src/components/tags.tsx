import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './tags.treat';

import { Label } from './label';

import { Illustration } from './illustration';
import { LABEL } from 'core-design-system';

type OwnProps = {
  numberIndex: string;
};

export const Tags: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Illustration
          className={`${styles.illustration}`}
          name={`Illustration/OvalSquare`}
          width={42}
          height={42}
        ></Illustration>
        <Label className={`${styles.number}`} variant={LABEL.smallBoldUppercase}>
          {props.numberIndex}
        </Label>
      </div>
      <div className={styles.content}>
        <Label className={`${styles.label}`} variant={LABEL.smallRegular}>
          {props.children}
        </Label>
      </div>
    </div>
  );
};