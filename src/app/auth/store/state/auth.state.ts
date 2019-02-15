import { User } from '../../../models';

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const INITIAL_AUTH_STATE: AuthState = {
  loggedIn: false,
  user: null
};
