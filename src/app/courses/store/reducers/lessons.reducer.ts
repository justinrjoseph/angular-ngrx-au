import { LessonActionTypes, LessonActions } from '../actions';

import { LessonsState, INITIAL_LESSONS_STATE } from '../state';

import { lessonsAdapter } from '../entities';

export function lessonsReducer(
  state: LessonsState = INITIAL_LESSONS_STATE,
  action: LessonActions): LessonsState {
  switch ( action.type ) {
    case LessonActionTypes.LessonsRequested:
      return { ...state, loading: true };

    case LessonActionTypes.LessonsLoaded:
      const { lessons } = action.payload;

      return lessonsAdapter.addMany(lessons, {
        ...state,
        loading: false,
        lessonsLoaded: true
      });

    case LessonActionTypes.LessonsCancelled:
      return { ...state, loading: false };

    default:
      return state;
  }
}
