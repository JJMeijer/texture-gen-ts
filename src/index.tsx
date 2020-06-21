import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { App } from './components/App';

ReactDOM.render(
  <>
    <CssBaseline />
    <Container maxWidth="xl">
      <App />
    </Container>
  </>,
  document.getElementById('root'),
);
