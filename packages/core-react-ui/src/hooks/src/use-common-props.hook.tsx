/// <reference path="../../core-types/src/github-slugger.d.ts" />

import { getFormattedAnchorId, getMergedClassname } from '@newrade/core-react-ui-utilities-iso.js';

import { AsTypes, PrimitiveProps } from '../primitive/primitive.props.js';

/**
 * Hook to reduce component boilerplate. Takes care of normalizing id, classNames and styles.
 */
export function useCommonProps<As extends AsTypes = 'div'>({
  id,
  localStyle,
  classNames,
  className,
  style,
  ...props
}: PrimitiveProps<As> & {
  localStyle?: React.CSSProperties | undefined;
  classNames?: (string | null | undefined | boolean)[];
}) {
  return {
    /**
     * Normalize ids
     */
    id: id ? getFormattedAnchorId(id) : undefined,
    /**
     * Merge supplied style with the ones passed from the parent
     */
    style: {
      ...(localStyle ? localStyle : {}),
      ...style,
    },
    /**
     * Merge local class names with the parent's
     */
    className: classNames ? getMergedClassname([className, ...classNames]) : className,
    /**
     * Pass remaining props
     */
    ...props,
  };
}
