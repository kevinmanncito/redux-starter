import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LinkReducer from './reducers/link';
import App from './containers/App';


const store = createStore(
  LinkReducer,
  window.devToolsExtension && window.devToolsExtension()
);


render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
