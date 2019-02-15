import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
<<<<<<< HEAD
    MatDatepickerModule,
    MatDialogModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
    MatSlideToggleModule,
    MatSortModule, MatTableModule
} from "@angular/material";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CourseEffects} from './course.effects';
import {coursesReducer} from './course.reducers';
import {lessonsReducer} from './lessons.reducers';
=======
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

import { MatTabsModule } from '@angular/material/tabs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
>>>>>>> 1-auth

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent} from './home/home.component';
import { CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import { CourseComponent} from './course/course.component';
import { CourseDialogComponent} from './course-dialog/course-dialog.component';

import * as fromCourses from './store';
import * as services from './services';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: CourseComponent,
    resolve: {
      course: services.CourseResolver
    }
  }
];

@NgModule({
<<<<<<< HEAD
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        ReactiveFormsModule,
        RouterModule.forChild(coursesRoutes),
        StoreModule.forFeature('courses', coursesReducer),
        StoreModule.forFeature('lessons', lessonsReducer),
        EffectsModule.forFeature([CourseEffects])
    ],
    declarations: [HomeComponent, CoursesCardListComponent, CourseDialogComponent, CourseComponent],
    exports: [HomeComponent, CoursesCardListComponent, CourseDialogComponent, CourseComponent],
    entryComponents: [CourseDialogComponent],
    providers: [
        CoursesService,
        CourseResolver
    ]
=======
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
    StoreModule.forFeature('courses', fromCourses.coursesReducer),
    StoreModule.forFeature('lessons', fromCourses.lessonsReducer),
    EffectsModule.forFeature([fromCourses.CourseEffects])
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    CourseComponent
  ],
  entryComponents: [CourseDialogComponent],
  providers: [
    services.CoursesService,
    services.CourseResolver
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    CourseComponent
  ],
>>>>>>> 1-auth
})
export class CoursesModule {}
