import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { aboutStyles } from '../styles'
import { Layout, TeamAvatar } from '../components'
import loadIntlMessages from '../helper/loadIntlMessages'
import { FormattedMessage, useIntl } from 'react-intl'


export async function getStaticProps(ctx) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

export default function About() {
  const intl = useIntl()
  const classes = aboutStyles();

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
    <Layout title={intl.formatMessage({ "defaultMessage":"Quienes somos", "description":"About page: title" })}>
      <div className={classes.root}>
        <Grid container>
          <G>
            <img src="/logos/logo-csl.png" className={classes.logo} />
          </G>        
          <G>
            <Typography className={classes.typography} variant="h4" component="h1" gutterBottom align="center">
              {intl.formatMessage({ "defaultMessage":"Quienes somos", "description":"About page: title" })}
            </Typography>
          </G>
          <G>
            <Typography className={classes.typography} variant="body1" gutterBottom align="center">
              {intl.formatMessage({ "defaultMessage":"Somos la comunidad de Software Libre de Cd. Serdán, Puebla, México. Desde hace más de una década promovemos y difundimos el software libre, código abierto, hardware libre y temas relacionados.", "description":"About page: description 1" })}
            </Typography>
          </G>        
          <G>
            <Typography className={classes.typography} variant="body1" gutterBottom align="center">
              {intl.formatMessage({ "defaultMessage":"Durante los últimos 10 años hemos organizado el DiSoL 'Día del Software libre' teniendo como sede el Instituto Tecnológico Superior de Cd. Serdán, dando a conocer a la comunidad estudiantil y a cualquier entusiasta interesado en aprender las tecnologías que actualmente se trabajan en la industria mediante ciclos de conferencias y talleres.", "description":"About page: description 2" })}
            </Typography>
          </G>        
          <G>
            <Typography className={classes.typography, classes.teamTitle} variant="h4" component="h1" gutterBottom align="center">
              {intl.formatMessage({ "defaultMessage":"Team", "description":"About page: team title" })}
            </Typography>
          </G>
          <G>
            <TeamAvatar />
          </G>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.grid}>
            <Container maxWidth="md">
              &nbsp;
            </Container>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
