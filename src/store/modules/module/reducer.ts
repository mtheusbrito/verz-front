import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, ModuleActionTypes, ModuleState, SUCCESS_REQUEST, UPDATE_REQUEST} from "./types";
import produce from "immer";

const initialState: ModuleState = {
  module: null,
  loading: false
  
}


export default function moduleReducer(
  state = initialState,
  action: ModuleActionTypes
): ModuleState{
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
      default:
    }
  })

}