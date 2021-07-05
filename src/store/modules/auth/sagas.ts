import { all, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { LOGIN_REQUEST, LOGOUT, LoginRequestAction, SetTokenAction } from './types';

import history from 'services/history';
import { ErrorResponse, User } from 'types';
import { failureRequest, loginSuccess } from './actions';
import { toast } from 'react-toastify';
import { saveProfileState } from '../user/actions';

interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
}
export function* login({ payload }: LoginRequestAction) {
  try {
    const { email, password } = payload;
    const response: LoginResponse = yield call(axios.post, '/users/login', {
      email,
      password,
    });
    const { token, user } = response.data;
    axios.defaults.headers.Authorization = `Baerer ${token}`;
  
    yield put(loginSuccess(token, user));
    yield put(saveProfileState(user));
    toast.success('Bem vindo!');
    history.push('/adm');
  } catch (err: any) {
    yield put(failureRequest(err as ErrorResponse));
  }
  
}

export function setToken({ payload }: SetTokenAction) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) axios.defaults.headers.Authorization = `Baerer ${token}`;
}

export function logout() {
  history.push(`/`);
}
export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest(LOGIN_REQUEST, login),
  takeLatest(LOGOUT, logout),
]);

