import { AuthActionTypes, AuthActions } from '../actions';

import { INITIAL_AUTH_STATE, AuthState } from '../state';

export function authReducer(
  state: AuthState = INITIAL_AUTH_STATE,
  action: AuthActions): AuthState {
  switch ( action.type ) {
    case AuthActionTypes.Login:
      const { user } = action.payload;

      return { ...state, loggedIn: true, user };

    case AuthActionTypes.Logout:
      return { ...state, loggedIn: false, user: null };

    default:
      return state;
  }
}
