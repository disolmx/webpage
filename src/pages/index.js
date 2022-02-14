import React from 'react';
import { useIntl } from 'react-intl'
import loadIntlMessages from '../helper/loadIntlMessages'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden  from '@material-ui/core/Hidden'
import { 
  Hero, 
  Layout,
  VenueLocation, 
  CardOfVenue 
} from '../components'

export async function getStaticProps(ctx) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

export default function Index() {
  const intl = useIntl()

  return (
    <Layout title={intl.formatMessage({ defaultMessage:"Página oficial del Día del Software Libre (DiSoL)", description:"Index page title" })}>
      <Hero />

      <Hidden only="xs">
        <VenueLocation />
      </Hidden>
      <Hidden smUp>
        <CardOfVenue />
      </Hidden>
    </Layout>
  );
}

