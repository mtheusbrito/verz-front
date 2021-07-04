import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import modules from "./module/reducer";
import entity from './class/reducer';
const rootReducer = combineReducers({
  auth,
  user, 
  modules,
  entity
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;