import { createEntityAdapter } from '@ngrx/entity';

import { Lesson } from '../../models';

export const lessonsAdapter = createEntityAdapter<Lesson>({
  sortComparer: sortByCourseIdAndSeqNo
});

function sortByCourseIdAndSeqNo(l1: Lesson, l2: Lesson) {
  const compare = l1.courseId - l2.courseId;

  if ( compare === 0 ) return l1.seqNo - l2.seqNo;
  else return compare;
}

export const {
  selectAll: getAllLessons,
  selectEntities: getLessonEntities,
  selectIds: getLessonIds,
  selectTotal: getTotalLessons
} = lessonsAdapter.getSelectors();
