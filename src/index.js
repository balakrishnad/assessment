import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store';
import { initAuth, Formio, Components } from 'react-formio';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { AppConfig } from './config';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles.scss';

Formio.setProjectUrl(AppConfig.projectUrl);
Formio.setBaseUrl(AppConfig.apiUrl);

// Components.setComponents(components);

// Initialize the current user
store.dispatch(initAuth());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
