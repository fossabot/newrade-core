import React, { SelectHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './input.treat';

type Props = CommonComponentProps<'input'> &
  SelectHTMLAttributes<any> & {
    state?: 'rest' | 'error';
  };

export const InputSelect = React.memo(
  React.forwardRef<HTMLSelectElement, Props>(function InputText(
    { id, style, className, state = 'rest', ...props },
    ref
  ) {
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([
      className,
      styles.rest,
      styles.primary,
      styles.medium,
      state === 'error' ? styles.error : '',
    ]);
    const renderedId = id || props.name || '';

    return <select ref={ref} id={renderedId} style={style} className={classNames} {...props} />;
  })
);