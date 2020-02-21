import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';

import { formatMessage } from '../utils'
import { Layout } from '../components'

export default function Contact() {
  return (
    <Layout title={formatMessage("contact.title")}>
      <Container maxWidth="sm">
        <Box my={4} display="flex" justifyContent="center">
          <Typography variant="h4" component="h1" gutterBottom>
            {formatMessage("contact.title")}
          </Typography>
        </Box>
        <formControl margin={'dense'}>
          <Grid justify='center' >
            <Box mb={3}> 
              <TextField fullWidth
                id="outlined-helperText"
                label="Nombre"
                helperText="Requisito Importante"
                variant="outlined"
                placeholder="Escribe tu Nombre Completo"
              />    
            </Box>
            <Box mb={3}>
              <TextField fullWidth
                id="outlined-helperText"
                label="Email"
                helperText="Escribe tu Email"
                variant="outlined"
              />
            </Box> 
            <Box mb={3}>
              <TextField fullWidth
                id="outlined-multiline-static"
                label="Mensaje"
                multiline
                rows="6"
                placeholder="Escribe tu mensaje"
                variant="outlined"
              />
            </Box>  
          </Grid>
        </formControl>
      </Container>
    </Layout>
  );
}
