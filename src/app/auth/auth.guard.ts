import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { isLoggedIn } from './store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _store: Store<AppState>, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._store.select(isLoggedIn)
      .pipe(
        tap((loggedIn: boolean) => {
          if ( !loggedIn ) this._router.navigate(['/login']);
        })
      );
  }
}
