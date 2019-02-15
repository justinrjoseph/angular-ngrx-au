<<<<<<< HEAD
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions, AuthActionTypes} from '../auth/auth.actions';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';


export interface AppState {

=======
import { environment } from '../../environments/environment';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {
  router: any;
>>>>>>> 1-auth
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

<<<<<<< HEAD




export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
=======
export const metaReducers: MetaReducer<AppState>[] =
  environment.production ? [] : [storeFreeze];
>>>>>>> 1-auth
