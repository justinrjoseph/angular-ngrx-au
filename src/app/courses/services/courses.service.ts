import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

<<<<<<< HEAD
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";
=======
import { Course, Lesson } from '../models';
>>>>>>> 1-auth

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesService {
<<<<<<< HEAD

    constructor(private http:HttpClient) {

    }

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get<Course>(`/api/courses/${courseId}`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findAllCourseLessons(courseId:number): Observable<Lesson[]> {
        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(
            map(res =>  res["payload"])
        );
    }

    findLessons(
        courseId:number,
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }


    saveCourse(courseId: number, changes: Partial<Course>) {
        return this.http.put('/api/courses/' + courseId, changes);
    }


}
=======
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
>>>>>>> 1-auth
