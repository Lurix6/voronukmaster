import React from 'react';
import { Route, Switch, Link } from 'react-router-dom' 
import App from './containers/app/';;
import Login from './containers/login/';
import RegisteredRoute from './RegisteredRoute';

const PublicRouter = ({ history, isLoggedIn}) => (
  <Switch>
    <Route
      exact
      path="/login"
      component={ Login }
    />
    <Route
      exact
      path="/forgotpassword"
      component={() => <div>Forgot password</div> }
    />
    <RegisteredRoute path="/" component={App} isLoggedIn={true} />
  </Switch>
)

export default PublicRouter;