import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as authActions from '../actions';

import { defer, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<authActions.Login>(authActions.AuthActionTypes.Login),
    tap((action: authActions.Login) => {
      const user = localStorage.getItem('user');

      if ( !user ) {
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      }
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<authActions.Logout>(authActions.AuthActionTypes.Logout),
    tap(() => {
      localStorage.removeItem('user');

      this._router.navigate(['login']);
    })
  );

  @Effect()
  init$ = defer<authActions.Login | authActions.Logout>(() => {
    const user = localStorage.getItem('user');

    if ( user ) {
      return of(new authActions.Login({ user: JSON.parse(user) }));
    } else {
      return of(new authActions.Logout());
    }
  });

  constructor(private actions$: Actions, private _router: Router) {}
}
