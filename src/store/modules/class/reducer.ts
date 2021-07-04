import { CREATE_REQUEST, DELETE_REQUEST, FAILURE_REQUEST, ClassActionTypes, ClassState, SUCCESS_REQUEST, UPDATE_REQUEST, RELOAD_DATA} from "./types";
import produce from "immer";

const initialState: ClassState = {
  class: null,
  loading: false,
  reload: false,
 
  
}


export default function classReducer(
  state = initialState,
  action: ClassActionTypes
): ClassState{
  return produce(state, (draft)=>{
    switch(action.type){
      case CREATE_REQUEST || UPDATE_REQUEST || DELETE_REQUEST:{
         draft.loading = true;
       
         break;
      }
      case SUCCESS_REQUEST || FAILURE_REQUEST:{
        draft.loading = false;
        draft.reload = true;
        break;
      }
      case RELOAD_DATA:{
          draft.reload = action.payload.reload;
          break;
      }

      default:
    }
  })

}