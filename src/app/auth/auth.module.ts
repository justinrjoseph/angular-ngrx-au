import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
<<<<<<< HEAD
import {AuthService} from "./auth.service";
import * as fromAuth from './auth.reducer';
import {AuthGuard} from './auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
=======
import { EffectsModule } from '@ngrx/effects';
>>>>>>> 1-auth

import * as fromAuth from './store';

<<<<<<< HEAD
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forChild([{path: '', component: LoginComponent}]),
        StoreModule.forFeature('auth', fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects]),
=======
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
>>>>>>> 1-auth

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([fromAuth.AuthEffects])
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [LoginComponent]
})
<<<<<<< HEAD
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
              AuthService,
              AuthGuard
            ]
        }
    }
}
=======
export class AuthModule {}
>>>>>>> 1-auth
