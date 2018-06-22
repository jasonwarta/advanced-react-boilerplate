import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider from 'react-apollo/ApolloProvider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import initClient from '~/utils/initClient';

import App from './App';

import './index.scss';

const client = initClient();

/* eslint-disable react/jsx-filename-extension */
const ApolloWrapper = () => (
  <ApolloProvider client={client} >
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </React.Fragment>
  </ApolloProvider>);
/* eslint-enable react/jsx-filename-extension */

ReactDOM.render(
  <ApolloWrapper />,
  document.getElementById('root'),
);
