import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';

import { Login } from '../store/actions';

import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
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
  }

  login(): void {
    const { email, password } = this.form.value;

    this._auth.login(email, password)
      .subscribe(
        (user) => {
          this._store.dispatch(new Login({ user }));

          this._router.navigate(['/courses']);
        },
        () => alert('Login failed')
      );
  }
}
