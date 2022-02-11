import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

import { LinkVariant, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  Button,
  Link,
  PrimitiveProps,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';

import * as styles from './docs-footer.css';

type Props = PrimitiveProps & {
  editPageUrl?: string;
  nextPageLabel?: string;
  nextPageUrl?: string;
};

export const DocsPageFooter: React.FC<Props> = ({
  id,
  style,
  className,
  editPageUrl,
  nextPageLabel,
  nextPageUrl,
  as,
  ...props
}) => {
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps<'footer'>({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });
  const renderEditLink = editPageUrl;
  const renderNextPageLink = nextPageUrl && nextPageUrl;

  return (
    <footer {...commonProps}>
      <div className={styles.content}>
        {renderEditLink ? (
          <Link
            variant={LinkVariant.noUnderline}
            variantSize={PARAGRAPH_SIZE.small}
            href={editPageUrl}
          >
            Edit this page
          </Link>
        ) : null}

        {renderNextPageLink ? (
          <Button
            as={'a'}
            variant={Variant.primary}
            Icon={<IoArrowForwardOutline />}
            style={{ marginLeft: 'auto' }}
            href={nextPageUrl}
          >
            {nextPageLabel}
          </Button>
        ) : null}
      </div>
    </footer>
  );
};
