<<<<<<< HEAD
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
=======
import { Injectable } from '@angular/core';
>>>>>>> 1-auth

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this._http.post<User>('/api/login', { email, password });
  }
}
