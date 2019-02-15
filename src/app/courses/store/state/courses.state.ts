import { EntityState } from '@ngrx/entity';

import { Course } from '../../models';

import { coursesAdapter } from '../entities';

export interface CoursesState extends EntityState<Course> {
  coursesLoaded: boolean;
}

export const INITIAL_COURSES_STATE: CoursesState = coursesAdapter.getInitialState({
  coursesLoaded: false
});
