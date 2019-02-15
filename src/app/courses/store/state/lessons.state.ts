import { EntityState } from '@ngrx/entity';

import { Lesson } from '../../models';

import { lessonsAdapter } from '../entities';

export interface LessonsState extends EntityState<Lesson> {
  loading: boolean;
  lessonsLoaded: boolean;
}

export const INITIAL_LESSONS_STATE: LessonsState = lessonsAdapter.getInitialState({
  loading: false,
  lessonsLoaded: false
});
