import { createEntityAdapter } from '@ngrx/entity';

import { Course } from '../../models';

export const coursesAdapter = createEntityAdapter<Course>();

export const {
  selectAll: getAllCourses,
  selectEntities: getCourseEntities,
  selectIds: getCourseIds,
  selectTotal: getTotalCourses
} = coursesAdapter.getSelectors();
