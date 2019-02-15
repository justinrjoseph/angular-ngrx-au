<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {filter, map, tap, withLatestFrom} from "rxjs/operators";
import {CoursesService} from "../services/courses.service";
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {selectAdvancedCourses, selectAllCourses, selectBeginnerCourses, selectPromoTotal} from '../course.selectors';
import {AllCoursesRequested} from '../course.actions';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;
=======
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
>>>>>>> 1-auth

import { Course } from '../models';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

<<<<<<< HEAD
    constructor(private store: Store<AppState>) {
=======
import { AllCoursesRequested } from '../store/actions';
import { promoTotal, beginnerCourses, advancedCourses  } from '../store/selectors';
>>>>>>> 1-auth

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

<<<<<<< HEAD
        this.store.dispatch(new AllCoursesRequested());

        this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

        this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

        this.promoTotal$ = this.store.pipe(select(selectPromoTotal));
=======
  advancedCourses$: Observable<Course[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(new AllCoursesRequested());

    this.promoTotal$ = this._store.select(promoTotal);
>>>>>>> 1-auth

    this.beginnerCourses$ = this._store.select(beginnerCourses);

    this.advancedCourses$ = this._store.select(advancedCourses);
  }
}
