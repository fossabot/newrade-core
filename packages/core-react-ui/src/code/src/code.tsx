import React from 'react';

import { CodeMarkupType, ColorsColors } from '@newrade/core-design-system';
import { pascal } from '@newrade/core-iso-utils';
import { Primitive } from '@newrade/core-react-ui-primitives';
import { PrimitiveProps } from '@newrade/core-react-ui-primitives';
import { colorVars } from '@newrade/core-react-ui-theme';

import * as styles from './code.css.js';

/**
 * @typedef {Object} CodeProps
 */
type CodeProps = PrimitiveProps<'code'> & {
  /**
   * The type of code to render (determines the color used)
   */
  kind?: CodeMarkupType;
};

/**
 * @description Render an inline code block with monospaced font
 * @type {React.FC<CodeProps>}
 * @param {CodeProps} props
 */
export const Code: React.FC<CodeProps> = ({
  style,
  children,
  kind = CodeMarkupType.Keyword,
  ...props
}) => {
  const codeColorName = `code${pascal(kind)}`;
  const color = colorVars.colors.code[codeColorName as keyof ColorsColors['code']];
  return (
    <Primitive
      as={'code'}
      classNames={[styles.wrapper]}
      style={{ ...style, color: color }}
      {...props}
    >
      {children}
    </Primitive>
  );
};
