import { Action } from '@ngrx/store';

import { User } from '../../../models';

export enum AuthActionTypes {
  Login = '[Login] Action',
  Logout = '[Logout] Action'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = Login | Logout;
