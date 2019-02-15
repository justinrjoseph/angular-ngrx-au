<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {map} from 'rxjs/operators';
import {isLoggedIn, isLoggedOut} from './auth/auth.selectors';
import {Router} from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppState } from './reducers';

import * as fromAuth from './auth/store';
>>>>>>> 1-auth

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

<<<<<<< HEAD
    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;


    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {

      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );

    }

    logout() {

      this.store.dispatch(new Logout());

    }

=======
  constructor(private _store: Store<AppState>, private _router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this._store.select(fromAuth.isLoggedIn)
      .pipe(
        tap((loggedIn) => {
          if ( loggedIn ) this._router.navigate(['/courses']);
        })
      );

    this.isLoggedOut$ = this._store.select(fromAuth.isLoggedOut);
  }
>>>>>>> 1-auth

  logout() {
    this._store.dispatch(new fromAuth.Logout());
  }
}
