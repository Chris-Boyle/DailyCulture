import React from 'react';
import { useRouter } from 'next/router';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LiquorIcon from '@mui/icons-material/Liquor';
// @material-ui/icons
// core components
import SnackbarContent from '../components/Snackbar/SnackbarContent';
import Layout from '../components/layout';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import SectionCarousel from 'pages-sections/Components-Sections/SectionCarousel.js';

import styles from '../styles/jss/nextjs-material-kit/pages/components';

const useStyles = makeStyles(styles);

const infoSection = makeStyles({
  container: {
    margin: '20px',
    paddingTop: '20px',
    maxWidth: '900px',
    margin: 'auto',
  },
});

export default function Components(props) {
  const classes = useStyles();
  const localClass = infoSection();
  const router = useRouter();
  const { ...rest } = props;
  return (
    <div>
      <Layout>
        <SnackbarContent
          message='Order Kombucha?'
          close={undefined}
          color='info'
          icon={LiquorIcon}
          onClick={() => router.push('/order')}
        />
        <Parallax image='/img/1-bottle-reversed-zoomout.png'>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Daily Culture</h1>
                  <h3 className={classes.subtitle}>Organic Kombucha</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer className={localClass.container}>
            <div>
              <Typography
                variant='h5'
                align='center'
                className={localClass.container}
              >
                We are a Kansas City based company specializing in small batch
                organic kombucha. Daily Culture was born out of an effort to
                provide a healthier, tastier drink option for our community! Our
                kombucha is alive and full of healthy probiotics to help keep
                your gut in check.
              </Typography>
            </div>
          </GridContainer>

          <SectionCarousel />
        </div>
      </Layout>
    </div>
  );
}
