import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../models';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

import { AllCoursesRequested } from '../store/actions';
import { promoTotal, beginnerCourses, advancedCourses  } from '../store/selectors';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(new AllCoursesRequested());

    this.promoTotal$ = this._store.select(promoTotal);

    this.beginnerCourses$ = this._store.select(beginnerCourses);

    this.advancedCourses$ = this._store.select(advancedCourses);
  }
}
