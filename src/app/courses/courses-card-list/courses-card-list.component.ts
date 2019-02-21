import { Component, Input } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';

import { Course } from '../models';

import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent {
  @Input() courses: Course[];

  constructor(private dialog: MatDialog) {}

  editCourse(course: Course): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}









