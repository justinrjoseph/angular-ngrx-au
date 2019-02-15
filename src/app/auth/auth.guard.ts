<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {isLoggedIn} from './auth.selectors';
import {tap} from 'rxjs/operators';



@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private store: Store<AppState>, private router: Router) {

  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>  {

    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {

          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }

        })
    );

  }

=======
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
>>>>>>> 1-auth
}
