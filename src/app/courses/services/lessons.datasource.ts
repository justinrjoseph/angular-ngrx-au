import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DataSource } from '@angular/cdk/collections';

import { Lesson, PageQuery } from '../models';

<<<<<<< HEAD
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {Lesson} from "../model/lesson";
import {CoursesService} from "./courses.service";
import {catchError, finalize, tap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {LessonsPageRequested, PageQuery} from '../course.actions';
import {selectLessonsPage} from '../course.selectors';
=======
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
>>>>>>> 1-auth

import { LessonsRequested } from '../store/actions';

import { courseLessons } from '../store/selectors';

export class LessonsDataSource implements DataSource<Lesson> {
<<<<<<< HEAD

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    constructor(private store: Store<AppState>) {

    }

    loadLessons(courseId:number, page: PageQuery) {
        this.store
          .pipe(
            select(selectLessonsPage(courseId, page)),
            tap(lessons => {
              if (lessons.length > 0) {
                this.lessonsSubject.next(lessons);
              }
              else {
                this.store.dispatch(new LessonsPageRequested({courseId, page}));
              }
            }),
            catchError(() => of([]))
          )
          .subscribe();

    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
    }

=======
  private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

  constructor(private _store: Store<AppState>) {}

  loadLessons(courseId: number, page: PageQuery): void {
    this._store.select(courseLessons(courseId, page))
      .pipe(
        tap((lessons: Lesson[]) => {
          if ( lessons.length ) this.lessonsSubject.next(lessons);
          else this._store.dispatch(new LessonsRequested({ courseId, page }));
        }),
        catchError((error) => of([]))
      )
      .subscribe();
  }

  connect(): Observable<Lesson[]> {
    console.log('Connecting data source');
    return this.lessonsSubject.asObservable();
  }

  disconnect(): void {
    this.lessonsSubject.complete();
  }
>>>>>>> 1-auth
}

