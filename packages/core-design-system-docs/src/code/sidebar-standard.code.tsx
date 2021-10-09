import loadable from '@loadable/component';
import { useSidebarState } from '@newrade/core-gatsby-ui/src';
import { Button, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

/**
 * Sidebar
 */
const LazySidebarStandard = loadable(
  () => import(/* webpackExports: ["SidebarStandard"] */ '@newrade/core-gatsby-ui/src'),
  {
    resolveComponent: (components: typeof import('@newrade/core-gatsby-ui/src')) =>
      components.SidebarStandard,
  }
);

type Props = {};

export const SidebarsStandard: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  const [sidebarOpened, setSidebarOpened] = useSidebarState({
    initial: false,
    autoCloseOnDesktop: false,
  });

  const handleSidebar = () => setSidebarOpened(!sidebarOpened);

  return (
    <div style={{ height: '600px', transform: 'translate3d(0,0,0)', overflow: 'hidden' }}>
      <LazySidebarStandard
        sidebarOpened={sidebarOpened}
        disableBodyScroll={false}
        onClickMenuButton={handleSidebar}
        onClickBackdrop={handleSidebar}
        style={{
          minHeight: '600px',
          maxHeight: '600px',
        }}
      ></LazySidebarStandard>

      <Button onClick={handleSidebar}>Toggle Sidebar</Button>
    </div>
  );
};
