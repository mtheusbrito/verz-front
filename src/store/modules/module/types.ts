import { Module } from "types";

export interface ModuleState {
  module: Module| null; 
  loading: boolean;
}

export const CREATE_REQUEST = "@module/CREATE_REQUEST";
export const UPDATE_REQUEST = "@module/UPDATE_UREQUEST";
export const DELETE_REQUEST = "@module/DELETE_REQUEST";
export const FAILURE_REQUEST = "@module/FAILURE_REQUEST";
export const SUCCESS_REQUEST = "@module/SUCCESS_REQUEST";


export interface UpdateRequestAction{
  type: typeof UPDATE_REQUEST ;
  payload: {
    module: Module
  }
}
export interface CreateRequestAction{
  type: typeof CREATE_REQUEST;
  payload: {
    module: Module
  }
}
export interface DeleteRequestAction{
  type: typeof DELETE_REQUEST;
  payload:{
    id: number
  }
}
export interface FailureRequestAction{
  type: typeof FAILURE_REQUEST;
}
export interface SuccessRequestAction{
  type: typeof SUCCESS_REQUEST;
}


export type ModuleActionTypes = FailureRequestAction | SuccessRequestAction | UpdateRequestAction | CreateRequestAction | DeleteRequestAction ;

