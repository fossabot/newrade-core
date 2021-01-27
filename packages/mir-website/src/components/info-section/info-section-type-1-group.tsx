import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-1-group.treat';

import { InfoSectionType1 } from './info-section-type-1';
import { SectionFragment } from '../../../types/graphql-types';

type OwnProps = SectionFragment & SectionProps & {};

export const InfoSectionType1Group: React.FC<OwnProps> = (props) => {
  const hasChilds = !!props?.subSections?.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {hasChilds
        ? props?.subSections?.map((section, index) => {
            return <InfoSectionType1 key={index} {...section} />;
          })
        : null}
    </div>
  );
};
