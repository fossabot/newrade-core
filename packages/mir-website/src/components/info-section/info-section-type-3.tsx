import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';
import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { Tab } from './tab';

import * as styleRefsType3 from './info-section-type-3.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionFragment;

export const InfoSectionType3: React.FC<OwnProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const hasImage = !!props?.image;
  const hasTabs = !!props?.childs.length;
  const styles = useStyles(styleRefsType3);

  return (
    <div
      className={`${styles.wrapper} ${props.type ? styles[props.type] : ''} ${props.align ? styles[props.align] : ''}`}
    >
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomRight'}
          url={props.image?.url}
          className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
        />
      ) : null}

      <div
        className={`${styles.content} ${
          props.align === 'AlignContentLeft' ? styles.alignContentLeft : styles.alignContentRight
        }  `}
      >
        {hasTabs ? (
          <div className={styles.tabsWrapper}>
            {props?.childs.map((infoSecTab, index) => {
              return (
                <Tab
                  key={index}
                  size="small"
                  selected={index === selectedTabIndex}
                  onClick={() => {
                    setSelectedTabIndex(index);
                  }}
                >
                  {infoSecTab.titleTab}
                </Tab>
              );
            })}
          </div>
        ) : null}

        {props.childs.map((info, index) => (selectedTabIndex === index ? renderTabbedInfoSection(info, index) : null))}
      </div>
    </div>
  );

  function renderTabbedInfoSection(props: SectionFragment, sectionIndex: number) {
    const styleRefs = useStyles(styleRefsType3);

    return (
      <React.Fragment key={`${sectionIndex}`}>
        <RenderTitleHighlight className={styleRefs.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styleRefs.text}>
          {props.text}
        </Paragraph>

        {/* <Button variantType={'primaryDefault'} variant={'text'} size={'medium'} className={styleRefs.button}>
          {props.actionText}
        </Button> */}

        {props.link && props.link.type === 'INTERNAL_PAGE' && props.link.page?.route ? (
          <GatsbyLink to={props.link.page?.route} className={styleRefs.button}>
            <Button variantType={'primaryDefault'} variant={'text'} size={'medium'}>
              {props.link.label}
            </Button>
          </GatsbyLink>
        ) : props.link && props.link.type === 'EXTERNAL_URL' && props.link.url ? (
          <a href={props.link.url} className={styleRefs.button}>
            <Button variantType={'primaryDefault'} variant={'text'} size={'medium'}>
              {props.link.label}
            </Button>
          </a>
        ) : null}
      </React.Fragment>
    );
  }
};
