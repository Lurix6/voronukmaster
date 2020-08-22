import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/app'
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from "react-router";

const DashApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

export default DashApp;
