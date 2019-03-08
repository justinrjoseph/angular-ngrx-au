import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

import { Update } from '@ngrx/entity';

import { Course } from '../models';
import { CoursesService } from '../services/courses.service';

import { CourseSaved } from '../store/actions';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent {
  courseId: number;
  form: FormGroup;
  description: string;

  constructor(
    private fb: FormBuilder,
    private _store: Store<AppState>,
    private coursesService: CoursesService,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course
  ) {
    this.courseId = course.id;

    this.description = course.description;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      longDescription: [course.longDescription, Validators.required],
      promo: [course.promo, []]
    });
  }

  save(): void {
    const changes = this.form.value;

    this.coursesService.saveCourse(this.courseId, changes)
      .subscribe(() => {
        const course: Update<Course> = {
          id: this.courseId,
          changes
        };

        this._store.dispatch(new CourseSaved({ course }));

        this.dialogRef.close();
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}
