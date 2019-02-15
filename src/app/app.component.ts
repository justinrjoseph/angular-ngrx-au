import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppState } from './reducers';

import * as fromAuth from './auth/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

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

  logout() {
    this._store.dispatch(new fromAuth.Logout());
  }
}
