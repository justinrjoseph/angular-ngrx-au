import { Injectable} from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Course} from '../models';

<<<<<<< HEAD
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import {AppState} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {filter, first, tap} from "rxjs/operators";
import {selectCourseById} from '../course.selectors';
import {CourseRequested} from '../course.actions';
=======
import { Store } from '@ngrx/store';
>>>>>>> 1-auth

import { AppState } from '../../reducers';

import { CourseRequested } from '../store/actions';
import { courseById } from '../store/selectors';

import { Observable} from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Course> {
<<<<<<< HEAD

    constructor(
        private coursesService:CoursesService,
        private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

        const courseId = route.params['id'];

        return this.store
          .pipe(
            select(selectCourseById(courseId)),
            tap(course => {
              if (!course) {
                this.store.dispatch(new CourseRequested({courseId}));
              }
            }),
            filter(course => !!course),
            first()
          )

    }

=======
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const id = route.params['id'];

    return this._store.select(courseById(id))
      .pipe(
        tap((course) => {
          if ( !course ) this._store.dispatch(new CourseRequested({ id }));
        }),
        filter((course) => !!course),
        first()
    );
  }
>>>>>>> 1-auth
}

