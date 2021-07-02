import { User, UserCreateEdit } from "types";
import { CREATE_REQUEST, FAILURE_REQUEST, SUCCESS_REQUEST, UPDATE_REQUEST, UserActionTypes, USER_SAVE_STATE } from "./types";

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
export function updateFailure(): UserActionTypes{
  return {
    type:FAILURE_REQUEST
  }
}
export function createFailure(): UserActionTypes{
  return {
    type:FAILURE_REQUEST
  }
}
export function createSuccess(): UserActionTypes{
  return {
    type:SUCCESS_REQUEST
  }
}
export function updateSuccess(): UserActionTypes{
  return {
    type:SUCCESS_REQUEST
  }
}
