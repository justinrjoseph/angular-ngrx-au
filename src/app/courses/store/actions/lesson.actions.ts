import { Action } from '@ngrx/store';

import { Lesson, PageQuery } from '../../models';

export enum LessonActionTypes {
  LessonsRequested = '[View Course] Lessons Requested',
  LessonsLoaded = '[Courses API] Lessons Loaded',
  LessonsCancelled = '[Courses API] Lessons Cancelled'
}

export class LessonsRequested implements Action {
  readonly type = LessonActionTypes.LessonsRequested;

  constructor(public payload: { courseId: number, page: PageQuery }) {}
}

export class LessonsLoaded implements Action {
  readonly type = LessonActionTypes.LessonsLoaded;

  constructor(public payload: { lessons: Lesson[] }) {}
}

export class LessonsCancelled implements Action {
  readonly type = LessonActionTypes.LessonsCancelled;
}

export type LessonActions =
  LessonsRequested |
  LessonsLoaded |
  LessonsCancelled;
