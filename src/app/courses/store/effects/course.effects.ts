import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { Course, Lesson } from '../../models';

import { AppState } from '../../../reducers';

import {
  CourseActionTypes,
  CourseRequested,
  CourseLoaded,
  AllCoursesRequested,
  AllCoursesLoaded,
  LessonActionTypes,
  LessonsRequested,
  LessonsLoaded,
  LessonsCancelled
} from '../actions';

import { allCoursesLoaded } from '../selectors';

import { CoursesService } from '../../services/courses.service';

import { of } from 'rxjs';
import { mergeMap, filter, withLatestFrom, map, catchError } from 'rxjs/operators';

@Injectable()
export class CourseEffects {
  @Effect()
  loadCourses$ = this.actions$.pipe(
    ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
    withLatestFrom(this._store.select(allCoursesLoaded)),
    filter(([action, coursesLoaded]) => !coursesLoaded),
    mergeMap(() => this._coursesService.findAllCourses()),
    map((courses: Course[]) => new AllCoursesLoaded({ courses }))
  );

  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType<CourseRequested>(CourseActionTypes.CourseRequested),
    mergeMap((action: CourseRequested) => {
      return this._coursesService.findCourseById(action.payload.id);
    }),
    map((course: Course) => new CourseLoaded({ course }))
  );

  @Effect()
  loadLessons$ = this.actions$.pipe(
    ofType<LessonsRequested>(LessonActionTypes.LessonsRequested),
    mergeMap(({ payload }) => {
      const { courseId, page } = payload;

      return this._coursesService.findLessons(courseId, page.index, page.size)
        .pipe(
          catchError((error) => {
            this._store.dispatch(new LessonsCancelled());

            return of([]);
          }),
        );
    }),
    map((lessons: Lesson[]) => new LessonsLoaded({ lessons })),
  );

  constructor(
    private actions$: Actions,
    private _store: Store<AppState>,
    private _coursesService: CoursesService
  ) {}
}
