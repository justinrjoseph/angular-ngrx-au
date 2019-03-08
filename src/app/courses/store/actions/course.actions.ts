import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Course } from '../../models';

export enum CourseActionTypes {
  CourseRequested = '[View Course] Course Requested',
  AllCoursesRequested = '[Courses Home] All Courses Requested',
  CourseLoaded = '[Courses API] Course Loaded',
  AllCoursesLoaded = '[Courses API] All Courses Loaded',
  CourseSaved = '[Course Modal] Course Saved'
}

export class CourseRequested implements Action {
  readonly type = CourseActionTypes.CourseRequested;

  constructor(public payload: { id: number }) {}
}

export class CourseLoaded implements Action {
  readonly type = CourseActionTypes.CourseLoaded;

  constructor(public payload: { course: Course }) {}
}

export class AllCoursesRequested implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
}

export class AllCoursesLoaded implements Action {
  readonly type = CourseActionTypes.AllCoursesLoaded;

  constructor(public payload: { courses: Course[] }) {}
}

export class CourseSaved implements Action {
  readonly type = CourseActionTypes.CourseSaved;

  constructor(public payload: { course: Update<Course> }) {}
}

export type CourseActions =
  CourseRequested |
  CourseLoaded |
  AllCoursesRequested |
  AllCoursesLoaded |
  CourseSaved;
