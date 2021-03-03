import { BlockType } from '../blocks/block.props';

export type BlockGoogleMapAPI = {
  id: string;
  name?: string | null;
  variant?: BlockType | null | string;
  placeId?: string;
  lat?: string;
  long?: string;
  zoom?: string;
  text?: {
    text?: string | null;
    childMdx: {
      body: string | null;
    };
  };
};
