<<<<<<< HEAD

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";
import {LessonsDataSource} from "../services/lessons.datasource";
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {PageQuery} from '../course.actions';
import {Observable} from 'rxjs/Observable';
import {selectLessonsLoading} from '../course.selectors';
=======
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
>>>>>>> 1-auth

import { ActivatedRoute } from '@angular/router';

import { MatPaginator } from '@angular/material';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

<<<<<<< HEAD
    displayedColumns = ["seqNo", "description", "duration"];
=======
import { lessonsLoading } from '../store/selectors';
>>>>>>> 1-auth

import { Course, PageQuery } from '../models';

<<<<<<< HEAD
    loading$ : Observable<boolean>;
=======
import { LessonsDataSource } from '../services/lessons.datasource';
>>>>>>> 1-auth

import { Observable } from 'rxjs';

<<<<<<< HEAD
    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
=======
@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, AfterViewInit {
  course: Course;
>>>>>>> 1-auth

  dataSource: LessonsDataSource;

  displayedColumns = ['seqNo', 'description', 'duration'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

<<<<<<< HEAD
        this.loading$ = this.store.pipe(select(selectLessonsLoading));

        this.dataSource = new LessonsDataSource(this.store);

        const initialPage: PageQuery = {
          pageIndex: 0,
          pageSize: 3
        };

        this.dataSource.loadLessons(this.course.id, initialPage);
=======
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private _store: Store<AppState>) {}
>>>>>>> 1-auth

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];

    this.loading$ = this._store.select(lessonsLoading);

<<<<<<< HEAD
        this.paginator.page
          .pipe(
            tap(() => this.loadLessonsPage())
          )
          .subscribe();

=======
    this.dataSource = new LessonsDataSource(this._store);

    const firstPage: PageQuery = {
      index: 0,
      size: 3
    };
>>>>>>> 1-auth

    this.dataSource.loadLessons(this.course.id, firstPage);
  }

<<<<<<< HEAD
    loadLessonsPage() {

      const newPage: PageQuery = {
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize
      };

      this.dataSource.loadLessons(this.course.id, newPage);

    }
=======
  ngAfterViewInit() {
    this.paginator.page
      .subscribe(() => this.loadLessonsPage());
  }
>>>>>>> 1-auth

  loadLessonsPage() {
    const newPage: PageQuery = {
      index: this.paginator.pageIndex,
      size: this.paginator.pageSize
    };

    this.dataSource.loadLessons(this.course.id, newPage);
  }
}
