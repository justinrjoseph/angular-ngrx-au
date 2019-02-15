import { Injectable} from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Course} from '../models';

import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';

import { CourseRequested } from '../store/actions';
import { courseById } from '../store/selectors';

import { Observable} from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const id = route.params['id'];

    return this._store.select(courseById(id))
      .pipe(
        tap((course) => {
          if ( !course ) this._store.dispatch(new CourseRequested({ id }));
        }),
        filter((course) => !!course),
        first()
    );
  }
}

