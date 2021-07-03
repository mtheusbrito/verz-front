import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import modules from "./module/reducer";
const rootReducer = combineReducers({
  auth,
  user, 
  modules
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;