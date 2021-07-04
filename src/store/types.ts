import { AuthState } from "./modules/auth/types";
import { UserState } from "./modules/user/types";
import { ModuleState } from "./modules/module/types";
import { ClassState } from "./modules/class/types";



export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  modules: ModuleState;
  entity: ClassState
}