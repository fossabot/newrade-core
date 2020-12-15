import { SizeType } from '../types';
import { VIEWPORT } from './layout';

/**
 * Content margins for each viewport formats.
 */
export type ContentMargins<Override extends undefined | string = undefined> = {
  [key in keyof typeof VIEWPORT]: SizeType<Override>;
};

/**
 * Content max width for larger viewports.
 */
export interface ContentWidths<Override extends undefined | string = undefined> {
  desktopMaxWidth: SizeType<Override>;
}
