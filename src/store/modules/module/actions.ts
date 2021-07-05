import { ErrorResponse, Module } from "types";
import { alertError } from "utils/getValidationErrors";
import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, ModuleActionTypes, RELOAD_DATA, SUCCESS_REQUEST, UPDATE_REQUEST } from "./types";


export function createRequest(module: Module): ModuleActionTypes{
  return {
    type:CREATE_REQUEST,
    payload:{
      module
    }
  }
}
export function updateRequest(module: Module): ModuleActionTypes{
  return {
    type:UPDATE_REQUEST,
    payload:{
      module
    }
  }
}

export function deleteRequest(id: number | undefined): ModuleActionTypes{
  return {
    type:DELETE_REQUEST,
    payload:{
      id
    }
  }
}
export function reloadData(reload: boolean){
  return {
    type:RELOAD_DATA,
    payload: {
      reload
    }
  }
}
export function failureRequest(err?: ErrorResponse): ModuleActionTypes{
  err && alertError(err);
  return {
    type:FAILURE_REQUEST
  }
}

export function successRequest(): ModuleActionTypes{
  return {
    type:SUCCESS_REQUEST
  }
}

