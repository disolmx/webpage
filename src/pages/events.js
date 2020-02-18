import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { formatMessage } from '../utils'
import { Layout } from '../components'

export default function List() {
  return (
    <Layout title={formatMessage("events.title")}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {formatMessage("events.title")}
          </Typography>
        </Box>

        <p>{process.env.SECRET}</p>
      </Container>
    </Layout>
  );
}
