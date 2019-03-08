import { AuthState } from '../state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

// feature selector
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const loggedIn = createSelector(
  selectAuthState,
  (auth: AuthState) => auth.loggedIn
);

export const loggedOut = createSelector(
  loggedIn,
  (isLoggedIn: boolean) => !isLoggedIn
);
