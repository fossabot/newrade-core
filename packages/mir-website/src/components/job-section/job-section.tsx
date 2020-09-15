import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Accordions } from '../accordions';
import { Tags } from '../tags';
import { CheckLabel } from '../info-section-check';
import * as styleRefs from './job-section.treat';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import {
  Maybe,
  GraphCms_JobSection,
  GraphCms_JobSectionType,
  GraphCms_JobType,
  GraphCms_Job,
} from '../../../types/graphql-types';
import { style } from 'treat/lib/types';
import { useViewportBreakpoint } from '../../hooks/use-viewport.hook';
import { VIEWPORT } from 'core-design-system';

type OwnProps = {
  jobSection: Maybe<
    Pick<GraphCms_JobSection, 'title' | 'titleHighlight'> & {
      type?: Maybe<Pick<GraphCms_JobSectionType, 'title' | 'type'>>;
      groups: Array<{
        typeName?: Maybe<
          Pick<GraphCms_JobType, 'id' | 'title'> & {
            jobGroup: Array<{ jobs: Array<Pick<GraphCms_Job, 'id' | 'title'>> }>;
          }
        >;
      }>;
    }
  >;
};

export function JobSection(props: OwnProps) {
  const styles = useStyles(styleRefs);
  const [selectedAccordionsIndex, setSelectedAccordionsIndex] = useState<number>(1);
  const { viewport } = useViewportBreakpoint();

  return (
    <div className={`${styles.wrapper} `}>
      <div className={styles.containerWrapper}>
        <RenderTitleHighlight
          className={styles.title}
          title={props?.jobSection?.title}
          titleHighlight={props?.jobSection?.titleHighlight}
        />
        {getVariantModifier(props?.jobSection?.type?.type)}
      </div>
    </div>
  );

  function getVariantModifier(value: GraphCms_JobSectionType['type']) {
    switch (value) {
      case 'candidates': {
        return (
          <div className={styles.container}>
            {props.jobSection?.groups.map((jobType, index) => {
              let lengthJobs: any = props.jobSection?.groups[index].typeName?.jobGroup[0].jobs.length;
              let RowNumber: number =
                viewport === VIEWPORT.desktop ? Math.ceil(lengthJobs / 3) : Math.ceil(lengthJobs / 1);
              return (
                <div className={styles.containerBloc} key={index}>
                  <div className={styles.accordions}>
                    <Accordions
                      type="candidates"
                      icon="IllustrationFactory"
                      variant="none"
                      onClick={() => {
                        setSelectedAccordionsIndex(index);
                      }}
                      selected={index === selectedAccordionsIndex}
                    >
                      {jobType.typeName?.title}
                    </Accordions>
                  </div>

                  <div
                    className={`${styles.content} ${styles.contentCheck} ${
                      index === selectedAccordionsIndex ? styles.selected : styles.unselected
                    } `}
                    style={{ gridTemplateRows: `repeat(${RowNumber}, 1fr)` }}
                  >
                    {props?.jobSection?.groups[index].typeName?.jobGroup[0].jobs.map((job, index) => {
                      return (
                        <div className={`${index % 2 == 0 ? styles.even : styles.unenven}`} key={index}>
                          <CheckLabel illustration="IllustrationCheck" size="medium">
                            {job.title}
                          </CheckLabel>
                        </div>
                      );
                    })}
                  </div>
                  {/* {selectedAccordionsIndex === index ? getMediaModifier(true, value) : getMediaModifier(false, value)} */}
                </div>
              );
            })}
          </div>
        );
      }

      case 'employer': {
        return (
          <div className={styles.container}>
            {props.jobSection?.groups.map((jobType, index) => {
              let lengthJobs: any = props.jobSection?.groups[index].typeName?.jobGroup[0].jobs.length;
              let RowNumber: number =
                viewport === VIEWPORT.desktop ? Math.ceil(lengthJobs / 3) : Math.ceil(lengthJobs / 1);

              return (
                <div className={styles.containerBloc} key={index}>
                  <div className={styles.accordions}>
                    <Accordions
                      type="employer"
                      variant="reversed"
                      selected={index === selectedAccordionsIndex}
                      onClick={() => {
                        setSelectedAccordionsIndex(index);
                      }}
                    >
                      {jobType.typeName?.title}
                    </Accordions>
                  </div>
                  <div
                    className={`${styles.content} ${styles.contentTag} ${
                      index === selectedAccordionsIndex ? styles.selected : styles.unselected
                    }`}
                    style={{ gridTemplateRows: `repeat(${RowNumber}, 1fr)` }}
                  >
                    {props?.jobSection?.groups[index].typeName?.jobGroup[0].jobs.map((job, index) => {
                      return (
                        <div className={styles.tagsUnique} key={index}>
                          <Tags numberIndex={`${index < 9 ? '0' : ''}${index + 1}`}> {job.title}</Tags>
                        </div>
                      );
                    })}
                  </div>
                  {/* {selectedAccordionsIndex === index ? getMediaModifier(true, value) : getMediaModifier(false, value)} */}
                </div>
              );
            })}
          </div>
        );
      }
      default: {
        return '';
      }
    }
  }
}
