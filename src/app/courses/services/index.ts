import { Provider } from '@angular/core';

import { CoursesService } from './courses.service';
import { CourseResolver } from './course.resolver';
import { LessonsDataSource } from './lessons.datasource';

export const providers: Provider[] = [
  CoursesService,
  CourseResolver,
  LessonsDataSource
];

export * from './courses.service';
export * from './course.resolver';
export * from './lessons.datasource';
