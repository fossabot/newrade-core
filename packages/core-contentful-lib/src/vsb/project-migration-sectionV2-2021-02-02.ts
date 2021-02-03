import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { createBlogAuthor } from '../common/content-types/blog-author';
import { createBlogPost } from '../common/content-types/blog-post';
import { createCompanyAddress } from '../common/content-types/company-address';
import { createCompanyInfo } from '../common/content-types/company-info';
import { createFieldTranslation } from '../common/content-types/field-translation';
import { createLink } from '../common/content-types/link';
import { createMediaCollection } from '../common/content-types/media-collection';
import { createPageType } from '../common/content-types/page-type';
import { createPortfolioClient } from '../common/content-types/portfolio-client';
import { createPortfolioProject } from '../common/content-types/portfolio-project';
import { createSectionType } from '../common/content-types/section-type';
import { createTag } from '../common/content-types/tag';
import { createTagType } from '../common/content-types/tag-type';
import { createBlock } from '../common/content-types/v2/block';
import { createBlockType } from '../common/content-types/v2/block-type';
import { createNavigation } from '../common/content-types/v2/navigation';
import { createPageV2 } from '../common/content-types/v2/pagev2';
import { createSectionV2 } from '../common/content-types/v2/sectionV2';
import { createCostItem, createStep } from './project-content-types';
import {
  PROJECT_BLOCK_TYPE,
  PROJECT_CONTENT_TYPE,
  PROJECT_FIELD,
  PROJECT_PAGE_TYPE,
  PROJECT_SECTION_TYPE,
} from './project-props-types';

const program: Migration.MigrationFunction = function Program(migration) {
  /**
   * Common
   */
  createFieldTranslation(migration);
  createLink(migration);
  createMediaCollection(migration);
  createCompanyAddress(migration);
  createCompanyInfo(migration);
  createTag(migration);
  createTagType(migration);
  createBlogAuthor(migration);
  createBlogPost(migration);
  createPortfolioProject(migration);
  createPortfolioClient(migration);

  createNavigation(migration);

  /**
   * Section v2
   */

  const page = createPageV2(migration);
  createPageType(migration, { pageTypes: PROJECT_PAGE_TYPE });
  const section = createSectionV2(migration);
  createSectionType(migration, { sectionTypes: PROJECT_SECTION_TYPE });

  const block = createBlock(migration);
  createBlockType(migration, { blockTypes: PROJECT_BLOCK_TYPE });

  /**
   * Project specific config for section
   */
  section.createField(PROJECT_FIELD.STEPS, {
    name: pascal(PROJECT_FIELD.STEPS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.STEP],
        },
      ],
    },
  });
  section.createField(PROJECT_FIELD.COST_ITEMS, {
    name: pascal(PROJECT_FIELD.COST_ITEMS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.COST_ITEM],
        },
      ],
    },
  });

  /**
   * Project specific content types
   */
  createStep(migration);
  createCostItem(migration);
};

// @ts-ignore
export = program;