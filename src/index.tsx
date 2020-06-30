import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import rootReducer from './store/texture';
import { App } from './components/App';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  rootElement,
);
