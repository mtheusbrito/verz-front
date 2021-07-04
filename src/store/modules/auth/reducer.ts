import produce from 'immer';
import {
  AuthActionTypes,
  AuthState,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

const initialState: AuthState = {
  token: null,
  signed: false,
  loading: false,
  master: false,
};

export default function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        draft.loading = true;
        break;
      }
       case LOGOUT: {
        draft.loading = false;
        draft.signed = false;
        draft.token = null;
        draft.master = false;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        draft.master = action.payload.user?.master || false;
        break;
      }
      case LOGIN_FAILURE: {
        draft.loading = false;
        draft.signed = false;
        draft.master = false;
        break;
      }
     

      default:
    }
  });
}
