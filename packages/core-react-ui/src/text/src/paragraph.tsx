import React from 'react';

import { PARAGRAPH_SIZE, ParagraphProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';

import * as styles from './paragraph.css.js';
import * as textStyles from './text-color.css.js';
import { TextCommonProps } from './text-common.props.js';

type Tag = 'p' | 'b' | 'div' | 'small' | 'strong' | 'em' | 'del' | 'ins';

type Props = PrimitiveProps<Tag> & ParagraphProps & TextCommonProps;

const defaultProps: Props = {
  kind: Variant.primary,
  size: PARAGRAPH_SIZE.medium,
  textStyle: TEXT_STYLE.normal,
  children: 'Paragraph',
};

export const Paragraph: React.FC<Props> = function Paragraph({
  as,
  kind = Variant.primary,
  size = defaultProps.size,
  textStyle = defaultProps.textStyle,
  display,
  disableCapsize,
  readableWidth,
  ...props
}) {
  const type = as ? as : 'p';
  const classNames = [
    styles.base,
    styles.variants({
      size: disableCapsize ? (size ? `${size}NoCapsize` : size) : size,
      style: textStyle,
      displayMode: display,
      readableWidth: readableWidth,
    }),
    textStyles.textVariants({
      variant: kind,
    }),
  ];

  return <Primitive as={type} classNames={classNames} {...props} />;
};
