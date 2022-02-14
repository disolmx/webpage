import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl'
import loadIntlMessages from '../helper/loadIntlMessages'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Layout } from '../components'

export async function getStaticProps(ctx) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

export default function List() {
  const intl = useIntl()

  return (
    <Layout title={intl.formatMessage({ defaultMessage:"Eventos", description:"Events title" })}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {intl.formatMessage({ defaultMessage:"Eventos", description:"Events title" })}
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
