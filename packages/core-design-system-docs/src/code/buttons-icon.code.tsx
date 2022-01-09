import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

import { ButtonIcon, ButtonSize, Variant } from '@newrade/core-design-system';
import { Button, Stack } from '@newrade/core-react-ui';

type Props = {};

export const ButtonsIcon: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        gridTemplateColumns: 'repeat(auto-fit, 360px)',
        gap: 'var(--sizing-x1)',
      }}
    >
      <Button size={ButtonSize.large} Icon={<IoArrowForwardOutline />}></Button>
      <Button
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        size={ButtonSize.xSmall}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.xSmall}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        size={ButtonSize.xSmall}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.secondary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.secondary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.large}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.medium}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.small}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>

      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.right}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.left}
        Icon={<IoArrowForwardOutline />}
      ></Button>
      <Button
        variant={Variant.tertiary}
        size={ButtonSize.xSmall}
        icon={ButtonIcon.icon}
        Icon={<IoArrowForwardOutline />}
      ></Button>
    </Stack>
  );
};
