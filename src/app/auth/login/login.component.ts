import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

<<<<<<< HEAD
import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from '../../reducers';
import {Login} from '../auth.actions';
=======
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';

import { Login } from '../store/actions';

import { AuthService } from '../auth.service';
>>>>>>> 1-auth

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
<<<<<<< HEAD
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<AppState>) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

=======
    private _store: Store<AppState>,
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
>>>>>>> 1-auth
  }

  login(): void {
    const { email, password } = this.form.value;

    this._auth.login(email, password)
      .subscribe(
        (user) => {
          this._store.dispatch(new Login({ user }));

<<<<<<< HEAD
    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .pipe(
        tap(user => {

          this.store.dispatch(new Login({user}));

          this.router.navigateByUrl('/courses');

        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      );


=======
          this._router.navigate(['/courses']);
        },
        () => alert('Login failed')
      );
>>>>>>> 1-auth
  }
}
