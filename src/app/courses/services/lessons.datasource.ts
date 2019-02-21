import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DataSource } from '@angular/cdk/collections';

import { Lesson, PageQuery } from '../models';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

import { LessonsRequested } from '../store/actions';

import { courseLessons } from '../store/selectors';

@Injectable()
export class LessonsDataSource implements DataSource<Lesson> {
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
}

