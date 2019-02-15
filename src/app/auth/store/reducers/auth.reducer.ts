import * as authActions from '../actions';

import { INITIAL_AUTH_STATE, AuthState } from '../state';

export function authReducer(
  state: AuthState = INITIAL_AUTH_STATE,
  action: authActions.AuthActions): AuthState {
  switch ( action.type ) {
    case authActions.AuthActionTypes.Login:
      const { user } = action.payload;

      return { ...state, loggedIn: true, user };

    case authActions.AuthActionTypes.Logout:
      return { ...state, loggedIn: false, user: null };

    default:
      return state;
  }
}
