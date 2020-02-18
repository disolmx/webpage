import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { formatMessage } from '../utils';
import { Layout } from '../components'

export default function About() {
  return (
    <Layout title={formatMessage("about.title")}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {formatMessage("about.title")}
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
