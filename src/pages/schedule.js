import React from 'react';
import { useIntl } from 'react-intl'
import loadIntlMessages from '../helper/loadIntlMessages'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Layout, Schedule as ScheduleForm  } from '../components'
import { scheduleStyles } from '../styles'


export async function getStaticProps(ctx) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

export default function Schedule() {
  const intl = useIntl()
  const classes = scheduleStyles();

  const G = ({ children }) => {
    return(
      <Grid item xs={12} className={classes.grid}>
        <Container maxWidth="md">
          {children}
        </Container>        
      </Grid>        
    )
  }

  return (
    <Layout title={intl.formatMessage({ defaultMessage:"Programa", description:"Schedule page title" })}>
      <div className={classes.root}>
        <Grid container>
          <G>
            <Typography className={classes.typography} variant="h4" component="h1" gutterBottom align="center">
              {intl.formatMessage({ defaultMessage:"Programa", description:"Schedule page title" })}
            </Typography>
          </G>
          <G>
            <ScheduleForm />
          </G>
        </Grid>
      </div>
    </Layout>
  );
}
