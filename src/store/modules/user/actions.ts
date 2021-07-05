import { ErrorResponse, User, UserCreateEdit } from "types";
import { alertError } from "utils/getValidationErrors";
import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, RELOAD_DATA, SUCCESS_REQUEST, UPDATE_REQUEST, UserActionTypes, USER_SAVE_STATE } from "./types";

export function saveProfileState(user:User): UserActionTypes{

  return {
    type: USER_SAVE_STATE, 
    payload:{
      user
    }
  };

}
export function createRequest(user: UserCreateEdit): UserActionTypes{
  return {
    type:CREATE_REQUEST,
    payload:{
      user
    }
  }
}
export function updateRequest(user: UserCreateEdit): UserActionTypes{
  return {
    type:UPDATE_REQUEST,
    payload:{
      user
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
export function updateFailure(): UserActionTypes{
  return {
    type:FAILURE_REQUEST
  }
}
export function failureRequest(err?: ErrorResponse): UserActionTypes{
  err && alertError(err);
  return {
    type:FAILURE_REQUEST
  }
}

export function deleteRequest(id: number | undefined): UserActionTypes{
  return {
    type:DELETE_REQUEST,
    payload:{
      id
    }
  }
}

export function successRequest(): UserActionTypes{
  return {
    type:SUCCESS_REQUEST
  }
}
