import React from 'react';
import { connect } from 'react-redux';
import AuthAction from '../../redux/auth/actions';

const { loginRequest, logoutRequest } = AuthAction;

function SignIn(props){
  const {
    isLoggedIn, 
    loginRequest, 
    logoutRequest
  } = props;

  return ( 
    <div>
      Sign In page
      <br />
      <br />
      Your status login: {isLoggedIn ? 'Authorization' : 'No Authorization'}
      <br />
      <br />
      <button onClick={() => { loginRequest()}}>
        login
      </button>
      <button onClick={() => { logoutRequest()}}>
        logOut
      </button>
    </div>
    )
}

export default connect(store =>
  ({
    isLoggedIn: store.Auth.isLoggedIn
  }), 
  { 
    loginRequest, 
    logoutRequest
  }
  )(SignIn);