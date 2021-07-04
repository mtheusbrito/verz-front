import { AuthState } from "./modules/auth/types";
import { UserState } from "./modules/user/types";
import { ModuleState } from "./modules/module/types";


export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  modules: ModuleState;
}