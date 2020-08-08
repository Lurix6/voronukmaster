import actions from './actions';

const initState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  userDetails: {
    claims: [],
    avatarUrl: null,
  },
  fetched: false
};

export default function authReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
      };

    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};