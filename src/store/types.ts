import { AuthState } from "./modules/auth/types";
import { UserState } from "./modules/user/types";

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
}