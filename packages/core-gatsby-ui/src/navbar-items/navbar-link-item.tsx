import React, { useRef } from 'react';

import { ICON, LABEL_SIZE, NavbarItemSize } from '@newrade/core-design-system';
import { IconComp, Label, Primitive, usePreventPinchZoom } from '@newrade/core-react-ui';

import { NavbarLinkProps } from './navbar-item.props';

import * as styles from './navbar-link-item.css';

type Props = NavbarLinkProps & {
  /**
   * Pass a SVG logo component
   */
  SVGLogo?: React.ReactNode;
  /**
   * Pass a custom children element
   */
  CustomChildren?: React.ReactNode;
};

/**
 * Component that render a navigation item
 *
 * It supports a few variants:
 *  - simple link
 *  - external link
 *  - menu link with icon
 *  - link with svg icon or component
 *  - link with a custom children
 *
 * @see https://zedesignsystem.com/design-system/components/navbars-items/
 */
export const NavbarLinkItem: React.FC<Props> = ({
  as = 'a',
  AsElement,
  variant,
  size = NavbarItemSize.medium,
  active,
  disabled,
  collapsePadding,
  icon,
  SVGLogo,
  Icon,
  CustomChildren,
  ...props
}) => {
  const ref = useRef(null);

  /**
   *
   * Styles
   *
   */

  const linkIsExternal = props.href && /https?:\/\//.test(props.href);
  const classNames = [
    styles.base,
    styles.navbarItemLink({
      variant: 'primary',
      kind: linkIsExternal ? 'external' : 'normal',
      size: size === NavbarItemSize.medium ? 'medium' : 'small',
      padding: collapsePadding,
      state: disabled ? 'disabled' : active ? 'active' : 'rest',
      hover: disabled ? false : true,
    }),
  ];
  const labelSize = size && size === NavbarItemSize.medium ? LABEL_SIZE.medium : LABEL_SIZE.small;

  /**
   *
   * Events Handling
   *
   */

  usePreventPinchZoom(ref.current);

  /**
   *
   * Logo
   *
   */

  const RenderedLogo = SVGLogo ? <div className={styles.logoWrapper}>{SVGLogo}</div> : null;

  /**
   *
   * Default children
   *
   */

  const RenderedCustomChildren = CustomChildren ? CustomChildren : null;
  const children = props.children ? props.children : RenderedLogo ? null : 'Link';

  return (
    <Primitive<'a', HTMLAnchorElement>
      ref={ref}
      as={as}
      style={{}}
      AsElement={AsElement}
      classNames={classNames}
      target={linkIsExternal ? '_blank' : undefined}
      role={AsElement || as !== 'a' ? 'link' : ''}
      tabIndex={0}
      variant={variant}
      {...props}
    >
      {/*
       * Default label
       */}
      {RenderedLogo || CustomChildren ? null : (
        <Label style={{ color: 'inherit' }} variant={labelSize}>
          {children}
        </Label>
      )}

      {/*
       * Custom children
       */}
      {RenderedCustomChildren}

      {/*
       * SVG Logo
       */}
      {RenderedLogo}

      {/*
       * Icon
       */}
      {icon ? <IconComp name={Icon || ICON.OPEN} className={styles.icon} /> : null}
    </Primitive>
  );
};
