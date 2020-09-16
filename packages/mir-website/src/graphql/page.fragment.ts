import { graphql } from 'gatsby';

export const query = graphql`
  fragment Page on GraphCMS_Page {
    name
    title
    description
    route
    bannerTitle
    bannerSubTitle
    bannerImages {
      url
    }
    actionSections {
      ...ActionSection
    }
    infoSections {
      ...InfoSections
    }
    blogSections {
      ...BlogSections
    }
    jobSections {
      ...JobSections
    }
    processSections {
      ...ProcessSections
    }
    testimonialSections {
      ...TestimoialSection
    }
  }
`;