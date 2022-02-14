import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';

import { Input } from '../components'
import { contactItems } from '../data';
import { contactStyles } from '../styles';
import { convertArrToObj } from '../utils'
import { Layout } from '../components'
import { FormattedMessage, useIntl } from 'react-intl'
import loadIntlMessages from '../helper/loadIntlMessages'

export async function getStaticProps(ctx) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

export default function Contact() {
  const intl = useIntl()
  const classes = contactStyles()
  const [contact, setContact] = useState(convertArrToObj(contactItems,"title","defaultValue"))

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.name]: e.value
    })
  }

  return (
    <Layout title={intl.formatMessage({ defaultMessage:"Contacto", description:"Contact title" })}>
      <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.inputSpacing}>
              <Container maxWidth="sm">
                <Typography align="center" variant="h4" component="h1" gutterBottom>
                  {intl.formatMessage({ defaultMessage:"Contacto", description:"Contact title" })}
                </Typography>
              </Container>        
            </Grid>        

            {contactItems.map((x, i) => 
              <Grid key={i} item xs={12} className={classes.inputSpacing}>
                <Container maxWidth="sm">
                  <Input 
                    onChange={handleChange} 
                    value={contact[x.title]} 
                    name={x.title} 
                    label={x.title}
                    multiline={x.multiline}
                  />
                </Container>
              </Grid>
            )}

            <Grid item xs={12} className={classes.inputSpacing}>
              <Container maxWidth="xs">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                  fullWidth
                >
                  {intl.formatMessage({ defaultMessage:"Enviar", description:"Contact send title" })}
                </Button>
              </Container>        
            </Grid>        

          </Grid>        
      </div>
    </Layout>
  );
}
