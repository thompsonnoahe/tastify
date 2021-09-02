import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Auth0Provider } from '@auth0/auth0-react';

import reducers from './reducers';
import App from './App';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain='tastify.us.auth0.com'
      clientId='okuGKoSVNPUmQatK1ZpRk0YLbjvZOm58'
      redirectUri={window.location.origin}
      audience='https://tastify.us.auth0.com/api/v2/'
      scope='read:current_user read:users read:current_user read:user_idp_tokens create:current_user_metadata update:current_user_metadata'>
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
