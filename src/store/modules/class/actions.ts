import { Class, ErrorResponse } from "types";
import { alertError } from "utils/getValidationErrors";
import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, ClassActionTypes, RELOAD_DATA, SUCCESS_REQUEST, UPDATE_REQUEST } from "./types";


export function createRequest(entity: Class, id_module: number): ClassActionTypes{
  return {
    type:CREATE_REQUEST,
    payload:{
      entity,
      id_module
    }
  }
}
export function updateRequest(entity: Class, id_module: number): ClassActionTypes{
  return {
    type:UPDATE_REQUEST,
    payload:{
      entity,
      id_module
    }
  }
}

export function deleteRequest(id: number | undefined): ClassActionTypes{
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
export function failureRequest(err?: ErrorResponse): ClassActionTypes{
  err && alertError(err);
  return {
    type:FAILURE_REQUEST
  }
}

export function successRequest(): ClassActionTypes{
  return {
    type:SUCCESS_REQUEST
  }
}

