/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from 'react-router-dom';
import routes from 'routes';
import { renderRoutes } from 'react-router-config';

// Import root app
// import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved */

import { HelmetProvider } from 'react-helmet-async';
import configureStore from './configureStore';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const ConnectedApp = () => (
  <Provider store={store}>
    <LanguageProvider>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          {/* <App /> */}
          <Router history={history}>{renderRoutes(routes)}</Router>
        </HelmetProvider>
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>
);

ConnectedApp.propTypes = {};

const render = () => {
  ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // Hot reloadable translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

// Chunked polyfill for browsers without Intl support
if (!Intl.PluralRules || !Intl.RelativeTimeFormat) {
  new Promise((resolve) => {
    if (!Intl.PluralRules) {
      resolve(
        Promise.all([
          import('@formatjs/intl-pluralrules/polyfill'),
          import('@formatjs/intl-pluralrules/dist/locale-data/en')
        ])
      );
    } else {
      resolve();
    }
  })
    .then(() => {
      if (!Intl.RelativeTimeFormat) {
        return Promise.all([
          import('@formatjs/intl-relativetimeformat/polyfill'),
          import('@formatjs/intl-relativetimeformat/dist/locale-data/en')
        ]);
      }
      return Promise.resolve();
    }) // eslint-disable-line prettier/prettier
    .then(() => render())
    .catch((err) => {
      throw err;
    });
} else {
  render();
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
