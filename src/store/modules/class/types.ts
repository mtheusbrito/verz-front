import { Class } from "types";

export interface ClassState {
  class: Class| null; 
  loading: boolean;
  reload: boolean;

}

export const CREATE_REQUEST = "@class/CREATE_REQUEST";
export const UPDATE_REQUEST = "@class/UPDATE_UREQUEST";
export const DELETE_REQUEST = "@class/DELETE_REQUEST";
export const FAILURE_REQUEST = "@class/FAILURE_REQUEST";
export const SUCCESS_REQUEST = "@class/SUCCESS_REQUEST";
export const RELOAD_DATA = "@class/RELOAD_DATA";


export interface UpdateRequestAction{
  type: typeof UPDATE_REQUEST ;
  payload: {
    entity: Class
    id_module?: number
  }
}
export interface Reload{
type: typeof RELOAD_DATA;  
payload:{
  reload: boolean
}
}
export interface CreateRequestAction{
  type: typeof CREATE_REQUEST;
  payload: {
    entity: Class
    id_module?: number
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


export type ClassActionTypes = FailureRequestAction | SuccessRequestAction | UpdateRequestAction | CreateRequestAction | DeleteRequestAction | Reload ;

