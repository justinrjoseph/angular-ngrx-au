import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CoursesState } from '../../store/state';

import * as selectors from '../../store/entities';

import { Course } from '../../models';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const courseById = (id: number) => createSelector(
  selectCoursesState,
  (state: CoursesState) => state.entities[id]
);

export const allCourses = createSelector(
  selectCoursesState,
  selectors.getAllCourses
);

export const allCoursesLoaded = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.coursesLoaded
);

export const beginnerCourses = createSelector(
  allCourses,
  (courses: Course[]) => filterCourses(courses, 'BEGINNER')
);

export const advancedCourses = createSelector(
  allCourses,
  (courses: Course[]) => filterCourses(courses, 'ADVANCED')
);

function filterCourses(courses: Course[], category: string) {
  return courses.filter((course: Course) => course.category === category);
}

export const promoTotal = createSelector(
  allCourses,
  (courses: Course[]) => courses.filter((course) => course.promo).length
);
