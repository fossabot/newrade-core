import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Cluster, Tag } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Tags: React.FC<Props> = (props) => {
  return (
    <>
      <Cluster justifyContent={['flex-start']} gap={[sizeVars.x1]} wrap={true}>
        <Tag variant={Variant.primary}>Loren</Tag>
        <Tag variant={Variant.primary}>Ipsum</Tag>
        <Tag variant={Variant.primary}>dolor</Tag>
        <Tag variant={Variant.primary}>amet</Tag>
        <Tag variant={Variant.primary}>architecto</Tag>
        <Tag variant={Variant.primary}>exercitationem</Tag>
      </Cluster>
      <Cluster justifyContent={['flex-start']} gap={[sizeVars.x1]} wrap={true}>
        <Tag variant={Variant.secondary}>architecto</Tag>
        <Tag variant={Variant.secondary}>dolor</Tag>
        <Tag variant={Variant.secondary}>amet</Tag>
        <Tag variant={Variant.secondary}>Loren</Tag>
        <Tag variant={Variant.secondary}>exercitationem</Tag>
        <Tag variant={Variant.secondary}>Ipsum</Tag>
      </Cluster>
      <Cluster justifyContent={['flex-start']} gap={[sizeVars.x1]} wrap={true}>
        <Tag variant={Variant.tertiary}>amet</Tag>
        <Tag variant={Variant.tertiary}>architecto</Tag>
        <Tag variant={Variant.tertiary}>dolor</Tag>
        <Tag variant={Variant.tertiary}>exercitationem</Tag>
        <Tag variant={Variant.tertiary}>Ipsum</Tag>
        <Tag variant={Variant.tertiary}>Loren</Tag>
      </Cluster>
    </>
  );
};
