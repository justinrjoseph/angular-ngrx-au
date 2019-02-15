import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Course, Lesson } from '../models';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  findCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${id}`);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get('/api/courses')
      .pipe(
          map((res) => res['payload'])
      );
  }

  findAllCourseLessons(id: number): Observable<Lesson[]> {
    return this.http.get('/api/lessons', {
        params: new HttpParams()
            .set('courseId', id.toString())
            .set('pageNumber', '0')
            .set('pageSize', '1000')
      })
      .pipe(
        map((res) =>  res['payload'])
      );
  }

  findLessons(courseId: number, pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
    return this.http.get('/api/lessons', {
        params: new HttpParams()
            .set('courseId', courseId.toString())
            .set('filter', '')
            .set('sortOrder', 'asc')
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
      })
      .pipe(
        map(res =>  res['payload'])
      );
  }

  saveCourse(id: number, changes: Partial<Course>) {
    return this.http.put(`/api/courses/${id}`, changes);
  }
}
