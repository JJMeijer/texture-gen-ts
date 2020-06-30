import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Header } from './Header';
import { Content } from './Content';

export const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Content />
        </Grid>
      </Grid>
    </Container>
  );
};
