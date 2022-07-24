import type { PartialOrNull } from '@newrade/core-types';

export type MediaImage = {
  title: string;
  description: string;
  file: any;
  /** @deprecated please use `hero`, `small`, `medium` or `large`  */
  fluid: any;
  /** @deprecated please use `hero`, `small`, `medium` or `large`  */
  fixed: any;
  /**
   * In sync with Gatsby Plugin (Gatsby v3)
   */
  fullWidth: any; // full width image for banners `gatsbyImageData(layout: FULL_WIDTH)`
  constrained: any; // full width image for banners `gatsbyImageData(layout: FULL_WIDTH)`
};

export type MediaAPI = PartialOrNull<{
  /**
   * The name of the media
   */
  name: string;
  /**
   * Media specific for mobile
   */
  mediaMobile: MediaImage;
  backgroundPositionMobileY?: string;
  maxWidthMobile: number;
  /**
   * Media for desktop if mediaMobile is set
   */
  media: MediaImage;
  backgroundPositionY?: string;
  maxWidth: number;
}>;
