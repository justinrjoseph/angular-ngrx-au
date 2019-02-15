import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MatPaginator } from '@angular/material';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

import { lessonsLoading } from '../store/selectors';

import { Course, PageQuery } from '../models';

import { LessonsDataSource } from '../services/lessons.datasource';

import { Observable } from 'rxjs';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, AfterViewInit {
  course: Course;

  dataSource: LessonsDataSource;

  displayedColumns = ['seqNo', 'description', 'duration'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private _store: Store<AppState>) {}

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];

    this.loading$ = this._store.select(lessonsLoading);

    this.dataSource = new LessonsDataSource(this._store);

    const firstPage: PageQuery = {
      index: 0,
      size: 3
    };

    this.dataSource.loadLessons(this.course.id, firstPage);
  }

  ngAfterViewInit() {
    this.paginator.page
      .subscribe(() => this.loadLessonsPage());
  }

  loadLessonsPage() {
    const newPage: PageQuery = {
      index: this.paginator.pageIndex,
      size: this.paginator.pageSize
    };

    this.dataSource.loadLessons(this.course.id, newPage);
  }
}
