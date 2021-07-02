import { User } from "types";

export interface AuthState{
  token: string | null;
  signed: boolean;
  loading: boolean;
}

export const LOGIN_REQUEST = "@auth/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "@auth/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "@auth/LOGIN_FAILURE";
export const LOGOUT = "@auth/LOGOUT";


export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user?: User;
  };
}
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}
export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface SetTokenAction {
  type: typeof LOGOUT;
  payload: {
    auth: AuthState;
  };
}
export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string,
    error?:string
}

export type AuthActionTypes = LoginRequestAction |LoginSuccessAction |LoginFailureAction| LogoutAction;