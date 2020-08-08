import { all, takeEvery, put, fork, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import superFetch from 'helpers/superFetch';
import openNotification from 'components/Notification';
import * as authHelper from 'helpers/authHelper';
import { ENDPOINTS } from 'consts';
import { apiRequest } from 'redux/helpers';
import actions from 'redux/auth/actions';

export function* handleLoginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function* ({ payload }) {
    const data = yield apiRequest(superFetch.post, ENDPOINTS.SIGN_IN, {
      email: payload.email,
      password: payload.password,
      remember: payload.remember,
    });
    if (data.errors) {
      yield put(actions.loginError(data.errors));
      yield openNotification('error', 'Error', data.errors);
    } else {
      yield put(actions.loginSuccess());
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_REQUEST_SUCCESS, function*() {
    authHelper.setAuthStatus(true);
    yield put(push('/dashboard'));
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT_REQUEST, function*() {
    authHelper.setAuthStatus(false);
    yield apiRequest(superFetch.post, ENDPOINTS.SIGN_OUT);
    yield put(push('/signIn'));
  });
}

export function* logOutPrevUser() {
  yield takeEvery(actions.LOGOUT_PREV_USER, function* () {
    authHelper.setAuthStatus(false);
    const auth = yield select((state) => state.Auth);
    if (auth.isLoggedIn) {
      yield apiRequest(superFetch.post, ENDPOINTS.SIGN_OUT);
    }
  });
}

export function* getUserDetails() {
  yield takeEvery(actions.USER_DETAILS_REQUEST, function*() {
    const data = yield apiRequest(superFetch.get, ENDPOINTS.CURRENT_USER_DETAILS);
    if (data.errors) {
      yield put(actions.getUserDetailsError(data.errors));
      yield openNotification('error', 'Error', data.errors);
    } else {
      if (!data) {
        return;
      }
      yield put(actions.getUserDetailsSuccess(data));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(handleLoginRequest),
    fork(loginSuccess),
    fork(logout),
    fork(logOutPrevUser),
    fork(getUserDetails),
  ]);
}
