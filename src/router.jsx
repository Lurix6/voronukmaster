import React from 'react';
import { Switch } from 'react-router-dom' 
import App from './containers/app/';;
import RegisteredRoute from './RegisteredRoute';

const PublicRouter = ({ history, isLoggedIn}) => (
  <Switch>
    <RegisteredRoute path="/" component={App} isLoggedIn={true} />
  </Switch>
)

export default PublicRouter;