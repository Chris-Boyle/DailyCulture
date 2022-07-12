import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import CardBody from '../components/Card/CardBody';
import componentStyles from '../styles/jss/nextjs-material-kit/pages/components';
import styles from 'styles/jss/nextjs-material-kit/components/headerLinksStyle.js';

const useComponentStyles = makeStyles(componentStyles);

const useStyles = makeStyles(styles);

const locations = [
  {
    name: 'Hammerhand Coffee',
    GPS: ['39.244380743712604', '-94.4238652713488'],
    address: '249 W Mill St Unit 109, Liberty, MO 64068',
    site: 'https://www.hammerhand.coffee/',
  },
  {
    name: 'Classic Cookie',
    GPS: ['38.99949700087589', '-94.59429267478984'],
    address: '409 W Gregory BLVD, Kansas City, MO',
    site: 'https://classiccookiekc.com/',
  },
  {
    name: 'Billies Grocery',
    GPS: ['39.068071', '-94.579472'],
    address: '3216 Gillham Plaza Suite 100, Kansas City, MO 64109',
    site: 'https://www.billiesgrocery.com/',
  },
  {
    name: 'Billies Juicery',
    GPS: ['39.0137072', '-94.5798727'],
    address: '634 E 63rd St, Kansas City, MO 64110',
    site: 'http://www.unbakeryandjuicerykc.com/',
  },
  {
    name: "McLain's Market - Overland Park",
    GPS: ['38.9352362', '-94.638921'],
    address: '10695 Roe Ave, Overland Park, KS 66207',
    site: 'https://www.mclainskc.com/overland-park',
  },
  {
    name: "McLain's Market - Shawnee",
    GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '5833 Nieman Rd, Shawnee, KS 66203',
    site: 'https://www.mclainskc.com/shawnee',
  },
  {
    name: "McLain's Bakery - Waldo",
    GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '201 E GREGORY BLVD, KCMO 64114 ',
    site: 'https://www.mclainskc.com/waldo',
  },
  {
    name: 'Thou Mayest - River Quay',
    address: '412 Delaware St B, Kansas City, MO 64105',
    site: 'https://thoumayest.com/pages/thou-mayest-river-quay',
  },
  {
    name: 'Cafe Equinox',
    address: '7036 Nieman Rd, Shawnee, KS 66203',
    site: 'http://www.cafeequinox.com/',
  },
  {
    name: 'PH Coffee',
    // GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '2200 Lexington Ave. Kansas City, MO 64124',
    site: 'https://www.ph.coffee',
  },
  {
    name: 'Room 39',
    // GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '1719 W 39th Street, KCMO 64111',
    site: 'https://www.rm39.com',
  },
  {
    name: "Crow's Coffee - Waldo",
    // GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '7440 Washington Street Kansas City, MO 64114',
    site: 'https://crowscoffee.com/waldo/',
  },
  {
    name: "Crow's Coffee - South Plaza",
    // GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '304 E. 51st Street Kansas City, Missouri 64112',
    site: 'https://crowscoffee.com/south-plaza/',
  },
  {
    name: "Crow's Coffee - Red Bridge",
    // GPS: ['39.022312571100215', '-94.71417317313768'],
    address:
      '535 E. Red Bridge Road Kansas City, MO 64131 (In the Red Bridge Shopping Center)',
    site: 'https://crowscoffee.com/red-bridge/',
  },
  {
    name: 'Market Wagon - online farmers market',
    // GPS: ['39.022312571100215', '-94.71417317313768'],
    address: '',
    site: 'https://shop.marketwagon.com/',
  },
];

export default function Where() {
  const componentClasses = useComponentStyles();
  const classes = useStyles();
  const openMap = (location) => {
    const { GPS, site, address } = location;
    if (!address && !GPS) {
      window.open(site);
      return;
    }
    const platform = navigator?.userAgentData?.platform || navigator?.platform;

    if (
      /* if we're on iOS, open in Apple Maps */
      platform.indexOf('iPhone') != -1 ||
      platform.indexOf('iPad') != -1 ||
      (platform.indexOf('iPod') != -1 && GPS)
    )
      window.open(`maps://maps.google.com/maps/dir/?daddr=${GPS}&amp;ll=`);
    // else use Google
    else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
    }
    // window.open(`https://maps.google.com/maps/dir/?daddr=${GPS}&amp;ll=`);
  };

  return (
    <Layout>
      <div
        style={{
          height: '10vh',
          paddingLeft: '10px',
        }}
      ></div>

      <div>
        <div
          className={classNames(
            componentClasses.main,
            componentClasses.mainRaised
          )}
        >
          <CardBody>
            <Grid item xs={12}>
              <Typography variant='h2' align='center'>
                Daily Culture in the WILD!
              </Typography>
            </Grid>
            <Grid container align='center' spacing={3}>
              {locations
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((location) => {
                  return (
                    <Grid item align='center' xs={12} md={4} sm={6}>
                      <Grid
                        className={classes.link}
                        item
                        xs={12}
                        onClick={() => window.open(location.site)}
                      >
                        <h3>{location.name}</h3>
                      </Grid>
                      <Grid
                        className={classes.link}
                        item
                        xs={12}
                        onClick={() => openMap(location)}
                      >
                        {location.address}
                      </Grid>
                    </Grid>
                  );
                })}
            </Grid>
          </CardBody>
        </div>
      </div>
    </Layout>
  );
}
