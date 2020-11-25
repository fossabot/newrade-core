import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-video.treat';
import Img from 'gatsby-image';
import { Heading } from '../ui/heading';
import { Paragraph } from '../ui/paragraph';
import { Video } from './video';
import { video } from './video.treat';
import { style } from 'treat/lib/types';
import { SectionFragment } from '../../../types/graphql-types';
import LazyLoad from 'react-lazyload';
import GatsbyImage from 'gatsby-image';
import { FadeIn } from '../animation/fade-in';

type OwnProps = SectionFragment;

export const InfoSectionVideo: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Heading className={styles.title} variant="h2">
            {props.title}
          </Heading>
          <Paragraph variant="medium">{props.text.text}</Paragraph>
        </div>
        <div className={styles.content}>
          <GatsbyImage className={`${styles.video}`} fluid={props.medias?.medias[0]?.desktopFluidImage}></GatsbyImage>
        </div>
      </div>
      <div className={styles.blue}></div>
    </div>
  );
};
