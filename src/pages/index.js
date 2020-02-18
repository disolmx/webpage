import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { formatMessage } from '../utils'
import { Layout } from '../components'

export default function Index() {
  return (
    <Layout title={formatMessage("home.title")}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {formatMessage("menu.home")}
          </Typography>
        </Box>

         <p>{process.env.SECRET}</p>
      </Container>
    </Layout>
  );
}
