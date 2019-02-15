import { AuthState } from '../state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

// feature selector
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth: AuthState) => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (loggedIn: boolean) => !loggedIn
);
