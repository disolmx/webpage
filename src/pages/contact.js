import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { formatMessage } from '../utils'
import { Layout } from '../components'

export default function Contact() {
  return (
    <Layout title={formatMessage("contact.title")}>


      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {formatMessage("contact.title")}
          </Typography>
          <form noValidate autoComplete="off" >
            <Grid xs={12} ms={16} >
              <div> 
              <TextField
                required
                id="outlined-required"
                label="Nombre"
                variant="outlined"
                fullWidth
              />
              </div>
              <div xs={12} sm={6}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                variant="outlined"
                fullWidth
                spacing={3}
              />
              </div>
              <div >
              <textarea rows={10} cols={30}  />    
              </div>
            </Grid>
          </form>
        </Box>
      </Container>
    </Layout>
  );
}
