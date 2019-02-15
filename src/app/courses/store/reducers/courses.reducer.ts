import { CourseActions, CourseActionTypes } from '../actions';

import { CoursesState, INITIAL_COURSES_STATE } from '../state';

import { coursesAdapter } from '../entities';

export function coursesReducer(
  state: CoursesState = INITIAL_COURSES_STATE,
  action: CourseActions): CoursesState {
  switch ( action.type ) {
    case CourseActionTypes.CourseLoaded:
      return coursesAdapter.addOne(action.payload.course, state);

    case CourseActionTypes.AllCoursesLoaded:
      return coursesAdapter.addAll(action.payload.courses, {
        ...state,
        coursesLoaded: true
      });

    case CourseActionTypes.CourseSaved:
      return coursesAdapter.updateOne(action.payload.course, state);

    default:
      return state;
  }
}
