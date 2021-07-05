import { User, UserCreateEdit } from "types";
import { LogoutAction } from "../auth/types";

export interface UserState {
  user: User| null; 
  loading: boolean;
  reload: boolean;
}

export const USER_SAVE_STATE = "@user/USER_SAVE_STATE";
export const CREATE_REQUEST = "@user/CREATE_REQUEST";
export const UPDATE_REQUEST = "@user/UPDATE_UREQUEST";
export const DELETE_REQUEST = "@user/DELETE_REQUEST";
export const FAILURE_REQUEST = "@user/FAILURE_REQUEST";
export const SUCCESS_REQUEST = "@user/SUCCESS_REQUEST";
export const RELOAD_DATA = "@module/RELOAD_DATA";


export interface Reload{
type: typeof RELOAD_DATA;  
payload:{
  reload: boolean
}
}
export interface UserSaveState{
  type: typeof USER_SAVE_STATE;
  payload:{
    user: User
  };
}
export interface UpdateRequestAction{
  type: typeof UPDATE_REQUEST ;
  payload: {
    user: UserCreateEdit
  }
}
export interface CreateRequestAction{
  type: typeof CREATE_REQUEST;
  payload: {
    user: UserCreateEdit
  }
}
export interface DeleteRequestAction{
  type: typeof DELETE_REQUEST;
  payload:{
    id: number | undefined
  }
}
export interface FailureRequestAction{
  type: typeof FAILURE_REQUEST;
}
export interface SuccessRequestAction{
  type: typeof SUCCESS_REQUEST;
}


export type UserActionTypes = FailureRequestAction | SuccessRequestAction| UserSaveState | UpdateRequestAction | CreateRequestAction | DeleteRequestAction | LogoutAction | Reload;

