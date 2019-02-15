import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LessonsState } from '../../store/state';

import * as selectors from '../../store/entities';

import { Lesson, PageQuery } from '../../models';

export const selectLessonsState = createFeatureSelector<LessonsState>('lessons');

export const allLessons = createSelector(
  selectLessonsState,
  selectors.getAllLessons
);

export const courseLessons = (courseId: number, page: PageQuery) => createSelector(
  allLessons,
  (lessons: Lesson[]) => {
    const start = page.index * page.size,
          end = start + page.size;

    return lessons
      .filter((lesson: Lesson) => lesson.courseId === courseId)
      .slice(start, end);
  }
);

export const lessonsLoading = createSelector(
  selectLessonsState,
  (state: LessonsState) => state.loading
);
