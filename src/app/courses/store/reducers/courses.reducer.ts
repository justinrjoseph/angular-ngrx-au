import { CourseActions, CourseActionTypes } from '../actions';

import { CoursesState, INITIAL_COURSES_STATE } from '../state';

import { coursesAdapter } from '../entities';

export function coursesReducer(
  state: CoursesState = INITIAL_COURSES_STATE,
  action: CourseActions): CoursesState {
  switch ( action.type ) {
    case CourseActionTypes.CourseLoaded:
      const { course } = action.payload;

      return coursesAdapter.addOne(course, state);

    case CourseActionTypes.AllCoursesLoaded:
      const { courses } = action.payload;

      return coursesAdapter.addAll(courses, {
        ...state,
        coursesLoaded: true
      });

    case CourseActionTypes.CourseSaved:
      const { course: updatedCourse } = action.payload;

      return coursesAdapter.updateOne(updatedCourse, state);

    default:
      return state;
  }
}
