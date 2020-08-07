import { GraphCms_Asset, GraphCms_InfoSection, GraphCms_InfoTile, Maybe } from '../../../types/graphql-types';

export type SectionModelQuery = Pick<
  GraphCms_InfoSection,
  'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'
> & {
  infoTiles: Array<Pick<GraphCms_InfoTile, 'icon' | 'title' | 'text'>>;
  childs: Array<
    Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>
  >;
  image?: Maybe<Pick<GraphCms_Asset, 'url'>>;
};