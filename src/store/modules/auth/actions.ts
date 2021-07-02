import { User } from "types";
import { AuthActionTypes, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./types";

export function loginRequest(email: string, password: string): AuthActionTypes {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(token: string, user: User): AuthActionTypes {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      user: user,
    },
  };
}


export function logout(): AuthActionTypes {
  return {
    type: LOGOUT,
  };
}
export function loginFailure(): AuthActionTypes {
  return {
    type: LOGIN_FAILURE,
  };
}