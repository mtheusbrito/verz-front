import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, SUCCESS_REQUEST, UPDATE_REQUEST, UserActionTypes, UserState, USER_SAVE_STATE } from "./types";
import produce from "immer";
import { LOGOUT } from "../auth/types";
const initialState: UserState = {
  user: null,
  loading: false

}


export default function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState{
  return produce(state, (draft)=>{
    switch(action.type){
      case CREATE_REQUEST || UPDATE_REQUEST || DELETE_REQUEST:{
         draft.loading = true;
         break;
      }
      case SUCCESS_REQUEST || FAILURE_REQUEST:{
        draft.loading = false;
        break;
      }
       case USER_SAVE_STATE:{
         draft.user = action.payload.user;
          break;
        }
        case LOGOUT:{
          draft.user = null;
          break
        }
    }
  })

}