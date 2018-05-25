import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Store } from './store';
import Home from './components/home';

export default props => (
  <Provider store={Store}>
    <Home />
  </Provider>
)
