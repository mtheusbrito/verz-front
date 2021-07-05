import { User } from "types";

export interface AuthState{
  token: string | null;
  signed: boolean;
  master: boolean;
  loading: boolean;
}

export const LOGIN_REQUEST = "@auth/LOGIN_REQUEST";
export const FAILURE_REQUEST = "@auth/FAILURE_REQUEST";
export const SUCCESS_REQUEST = "@auth/SUCCESS_REQUEST";
export const LOGOUT = "@auth/LOGOUT";


export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
export interface LoginSuccessAction {
  type: typeof SUCCESS_REQUEST;
  payload: {
    token: string;
    user?: User;
  };
}
export interface LoginFailureAction {
  type: typeof FAILURE_REQUEST;
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

export type AuthActionTypes = LoginRequestAction |LoginSuccessAction |LoginFailureAction| LogoutAction ;