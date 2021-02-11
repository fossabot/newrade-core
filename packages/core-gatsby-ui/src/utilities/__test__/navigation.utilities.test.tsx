import { Navigation } from '../../models/navigation.model';
import { getNavigationFromPageNodes } from '../navigation.utilities';
import { navigationMock } from './navigation.mock';

describe(`utility ${getNavigationFromPageNodes.name}`, () => {
  const emptyNavigation: Navigation = {
    name: 'navigation test',
    items: [],
  };

  it('should return an empty Navigation object from Gatsby page nodes', () => {
    const nav = getNavigationFromPageNodes({
      name: 'navigation test',
      pageNodes: [],
    });

    expect(nav).toEqual(emptyNavigation);
  });

  it('should return a valid Navigation object from Gatsby page nodes', () => {
    const nav = getNavigationFromPageNodes(navigationMock);

    const expectedNav: Navigation = {
      name: 'navigation test',
      items: [
        {
          name: 'path-a',
          displayName: 'Path A',
          path: 'path-a',
          items: [
            {
              name: 'page-2',
              displayName: 'Page 2',
              path: '/design-system/path-a/page-2',
            },
            {
              name: 'page-1',
              displayName: 'Page 1',
              path: '/design-system/path-a/page-1',
            },
          ],
        },
        {
          name: '',
          displayName: '',
          path: '',
          items: [
            {
              name: 'index',
              displayName: 'Index',
              path: '/',
            },
            {
              name: 'home',
              displayName: 'Home',
              path: '/design-system/',
            },
          ],
        },
        {
          name: 'path-b',
          displayName: 'Path B',
          path: 'path-b',
          items: [
            {
              name: 'page-1',
              displayName: 'Page 1',
              path: '/design-system/path-b/page-1',
            },
          ],
        },
      ],
    };

    expect(nav).toEqual(expectedNav);
  });
});