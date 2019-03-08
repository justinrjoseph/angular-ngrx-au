import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthActionTypes, Login, Logout } from '../actions';

import { defer, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(({ payload }) => {
      const user = localStorage.getItem('user');

      if ( !user ) localStorage.setItem('user', JSON.stringify(payload.user));
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => {
      localStorage.removeItem('user');

      this._router.navigate(['login']);
    })
  );

  @Effect()
  init$ = defer<Login | Logout>(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if ( user ) return of(new Login({ user }));
    else return of(new Logout());
  });

  constructor(private actions$: Actions, private _router: Router) {}
}
