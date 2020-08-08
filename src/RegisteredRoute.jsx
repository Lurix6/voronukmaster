import { Redirect, Route } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )}
  />
);
        }

RestrictedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

RestrictedRoute.defaultProps = {
  location: {},
};

export default RestrictedRoute;