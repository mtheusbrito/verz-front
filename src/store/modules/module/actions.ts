import { Module, User, UserCreateEdit } from "types";
import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, ModuleActionTypes, SUCCESS_REQUEST, UPDATE_REQUEST } from "./types";


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

export function deleteRequest(id: number): ModuleActionTypes{
  return {
    type:DELETE_REQUEST,
    payload:{
      id
    }
  }
}
export function failureRequest(): ModuleActionTypes{
  return {
    type:FAILURE_REQUEST
  }
}

export function successRequest(): ModuleActionTypes{
  return {
    type:SUCCESS_REQUEST
  }
}

