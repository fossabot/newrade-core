import { ICON_SIZE, LABEL } from 'core-design-system';
import { graphql, useStaticQuery } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { MobileBarQuery } from '../../types/graphql-types';
import { Icon } from '../ui/icon';
import { Button } from './button';
import { Heading } from './heading';
import { Illustration } from './illustration';
import { Label } from './label';
import * as stylesRef from './side-bar.treat';
import { NavigationProps } from '../layouts';
import { Link as GatsbyLink } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

type OwnProps = {
  state: string;
  onOpenSideMenu: () => void;
} & NavigationProps &
  HTMLAttributes<any>;

export const sideBarQuery = graphql`
  query mobileBar {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos {
        logo {
          url
        }
      }
    }
  }
`;

export const SideBar: React.FC<OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  const leftToolbarPageNames = ['Home', 'Candidates', 'Employers', 'Blog', 'About', 'Contact'];
  const leftToolbarPages = props.pages
    ?.filter((page) => leftToolbarPageNames.includes(page.name))
    .sort((pageA, pageB) => {
      const indexA = leftToolbarPageNames.indexOf(pageA.name);
      const indexB = leftToolbarPageNames.indexOf(pageB.name);
      return indexA > indexB ? 1 : -1;
    });

  const data = useStaticQuery<MobileBarQuery>(sideBarQuery);
  const pageActual = props.location?.pathname;

  return (
    <AnimatePresence>
      {props.state === 'openend' && (
        <motion.div
          className={`${props.className || ''} ${styles.wrapper} `}
          key="sidebar"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, x: 0 },
            collapsed: { opacity: 0.8, x: '-100%' },
          }}
          transition={{ duration: 0.6, easeInOut: [0.2, 0.62, 0.23, 0.98] }}
        >
          <motion.div
            className={styles.topContainer}
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            <img className={styles.logo} src={data?.gcms?.companyInfos[0]?.logo?.url} />
            <div className={styles.icon} onClick={(e) => props.onOpenSideMenu()}>
              <Icon icon="IconClose" size={ICON_SIZE.large}></Icon>
            </div>
          </motion.div>

          <motion.div
            className={styles.content}
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            <div className={styles.containerList}>
              <div className={styles.separation}>
                <Illustration
                  className={styles.bar}
                  width="29px"
                  height="3px"
                  name="Illustration/IllustrationBar"
                ></Illustration>
                <Label variant={LABEL.smallUppercase}>Menu</Label>
              </div>

              <nav className={styles.listMenu}>
                {leftToolbarPages?.map((page) => {
                  return (
                    <GatsbyLink
                      className={styles.titleItem}
                      to={page.route}
                      key={page.name}
                      activeClassName={`${styles.activeItem}`}
                    >
                      <div className={`${styles.itemMenu} ${pageActual == page.route ? styles.activeItem : ''}`}>
                        <Heading variant="h4">{page.title}</Heading>
                      </div>
                    </GatsbyLink>
                  );
                })}
              </nav>
            </div>
            <div className={styles.containerList}>
              <div className={styles.separation}>
                <Illustration
                  className={styles.bar}
                  width="29px"
                  height="3px"
                  name="Illustration/IllustrationBar"
                ></Illustration>
                <Label variant={LABEL.smallUppercase}>SOCIAL</Label>
              </div>
              <div className={styles.listSocial}>
                {props.facebookPageURL ? (
                  <a href={props.facebookPageURL} target={'_blank'} aria-label="Facebook Page" rel="noopener">
                    <Button
                      className={styles.btnSocial}
                      variantType="secondaryReversed"
                      size="medium"
                      variant="icon"
                      icon="IconFacebook"
                      aria-label="Facebook Page"
                    ></Button>
                  </a>
                ) : null}
                {props.linkedinPageURL ? (
                  <a href={props.linkedinPageURL} target={'_blank'} aria-label="LinkedIn Page" rel="noopener">
                    <Button
                      className={styles.btnSocial}
                      variantType="secondaryReversed"
                      size="medium"
                      variant="icon"
                      icon="IconLinkedin"
                      aria-label="LinkedIn Page"
                    ></Button>
                  </a>
                ) : null}
                {props.twitterPageURL ? (
                  <a href={props.twitterPageURL} target={'_blank'} aria-label="Twitter Page" rel="noopener">
                    <Button
                      className={styles.btnSocial}
                      variantType="secondaryReversed"
                      size="medium"
                      variant="icon"
                      icon="IconTwitter"
                      aria-label="Twitter Page"
                    ></Button>
                  </a>
                ) : null}
                {props.instagramPageURL ? (
                  <a href={props.instagramPageURL} target={'_blank'} aria-label="Instagram Page" rel="noopener">
                    <Button
                      className={styles.btnSocial}
                      variantType="secondaryReversed"
                      size="medium"
                      variant="icon"
                      icon="IconInstagram"
                      aria-label="Instagram Page"
                    ></Button>
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
