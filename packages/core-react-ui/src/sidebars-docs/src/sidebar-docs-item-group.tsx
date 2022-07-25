import React, { AnchorHTMLAttributes, useState } from 'react';

import { ICON, LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { IconComp } from '@newrade/core-react-ui-icons';
import { useCommonProps } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { getMergedClassname } from '@newrade/core-react-ui-utilities-iso';

import { Cluster } from '../layouts/cluster.js';
import { Stack } from '../layouts/stack.js';
import { Label } from '../text/label.js';

import * as styles from './sidebar-docs-item-group.css.js';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'kind' | 'icon' | 'size' | 'linkStyle'> & {
    label?: string;
  };

export const DesktopDocsItemGroup: React.FC<Props> = ({
  id,
  style,
  className,
  as,
  AsElement,
  label,
  ...props
}) => {
  const commonProps = useCommonProps<'div'>({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });
  const [isOpened, setIsOpened] = useState<boolean>(true);

  function handleOnClick(event: React.MouseEvent) {
    setIsOpened(!isOpened);
  }

  return (
    <Stack {...commonProps}>
      <Cluster onClick={handleOnClick} className={styles.group}>
        <Label
          textStyle={TEXT_STYLE.bold}
          variant={LABEL_SIZE.small}
          variantLevel={Variant.primary}
        >
          {label}
        </Label>

        <IconComp
          name={ICON.CHEVRON_DOWN}
          className={getMergedClassname([styles.icon, isOpened && styles.iconOpened])}
        />
      </Cluster>

      {isOpened ? <div className={styles.children}>{props.children}</div> : null}
    </Stack>
  );
};
