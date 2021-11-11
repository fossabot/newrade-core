import { Variant } from '@newrade/core-design-system';
import { Tag } from '@newrade/core-react-ui';
import React from 'react';

type Props = {
  tagText?: string;
};

export const NavbarLogoTagItem: React.FC<Props> = ({ tagText }) => {
  return tagText ? <Tag variant={Variant.primary}>{tagText}</Tag> : null;
};
