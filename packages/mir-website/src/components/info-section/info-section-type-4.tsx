import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';
import { Button } from '../ui/button';
import { Paragraph } from '../ui/paragraph';
import * as styleRefsType4 from './info-section-type-4.treat';
import { InfoTile } from './info-tile';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionFragment & SectionProps & {};

export const InfoSectionType4: React.FC<OwnProps> = (props) => {
  const variant = props?.type?.name as SECTION_TYPE.TYPE_4_PRIMARY | SECTION_TYPE.TYPE_4_SECONDARY;

  const styles = useStyles(styleRefsType4);
  const hasInfoTiles = !!props?.infoTiles?.length;

  function sectionStyle() {
    switch (variant) {
      case SECTION_TYPE.TYPE_4_PRIMARY: {
        return styles.type4Primary;
      }
      case SECTION_TYPE.TYPE_4_SECONDARY: {
        return styles.type4Secondary;
      }
    }
  }

  if (variant === SECTION_TYPE.TYPE_4_PRIMARY) {
    return (
      <div className={`${styles.wrapper} ${sectionStyle()} ${hasInfoTiles ? styles.extraPadding : ''}`}>
        <RenderTitleHighlight className={styles.title} title={props?.title} titleHighlight={props?.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props?.text?.text}
        </Paragraph>

        {hasInfoTiles ? (
          <div className={styles.infoTilesWrapper}>
            {props?.infoTiles?.map((info, index) => {
              return (
                <InfoTile
                  key={index}
                  className={styles.infoTile}
                  illustration={info?.illustration}
                  title={info?.title}
                  text={info?.text}
                  variants={variant}
                />
              );
            })}
          </div>
        ) : null}

        {props?.link && props?.link.type === 'INTERNAL_PAGE' && props?.link.page?.slug ? (
          <GatsbyLink to={props?.link?.page?.slug}>
            <Button variantType={'primaryReversed'} variant={'text'} size={'medium'}>
              {props?.link?.label}
            </Button>
          </GatsbyLink>
        ) : props?.link && props?.link?.type === 'EXTERNAL_URL' && props?.link?.url ? (
          <a href={props?.link?.url}>
            <Button variantType={'primaryReversed'} variant={'text'} size={'medium'}>
              {props?.link?.label}
            </Button>
          </a>
        ) : null}
      </div>
    );
  } else if (variant === SECTION_TYPE.TYPE_4_SECONDARY) {
    return (
      <div className={`${styles.wrapper2} ${sectionStyle()}`}>
        <div className={`${styles.container}`}>
          {props?.infoTiles?.map((infoTile, index) => {
            return (
              <InfoTile
                key={index}
                variants={variant}
                title={infoTile?.title}
                illustration={infoTile?.illustration}
                text={infoTile?.text}
              ></InfoTile>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
