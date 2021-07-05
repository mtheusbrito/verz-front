import { ErrorResponse, User } from "types";
import { alertError } from "utils/getValidationErrors";
import { AuthActionTypes, FAILURE_REQUEST, LOGIN_REQUEST, LOGOUT, SUCCESS_REQUEST } from "./types";

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
    type: SUCCESS_REQUEST,
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
export function failureRequest(err?: ErrorResponse): AuthActionTypes{
  err && alertError(err);
  return {
    type:FAILURE_REQUEST
  }
}
