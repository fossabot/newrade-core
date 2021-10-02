import { Variant } from '@newrade/core-design-system';
import { SidebarContainer, Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './sidebar-base.treat';
import { SidebarProps } from './sidebar.props';

type Props = SidebarProps & {
  contentClassName?: string;
};

const defaultProps: SidebarProps = {
  sidebar: {
    variant: Variant.primary,
  },
  sidebarMode: 'floating',
};

/**
 * Wrapper for sidebar components.
 */
export const SidebarBase = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      sidebar = defaultProps.sidebar,
      sidebarMode = defaultProps.sidebarMode,
      sidebarOpened,
      onClickMenuButton,
      onClickBackdrop,
      contentClassName,
      children,
      ...props
    },
    ref
  ) => {
    const variant = sidebar?.variant;
    /**
     * Styling
     */
    const { cssTheme } = useTreatTheme();
    const styles = useStyles(styleRefs);
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [
        sidebarMode === 'sticky' ? styles.sticky : '',
        sidebarMode === 'hanging' ? styles.hanging : '',
      ],
      ...props,
    });

    /**
     * Content
     */
    const contentClassnames = getMergedClassname([contentClassName]);

    if (sidebarMode === 'sticky' || sidebarMode === 'hanging') {
      return (
        <nav ref={ref} {...commonProps}>
          <Stack className={contentClassnames}>{children}</Stack>
        </nav>
      );
    }

    return (
      <SidebarContainer
        as={'nav'}
        ref={ref}
        sidebarOpened={sidebarOpened}
        onClickBackdrop={onClickBackdrop}
        disableBodyScroll={true}
        {...commonProps}
      >
        <Stack className={contentClassnames}>{children}</Stack>
      </SidebarContainer>
    );
  }
);
