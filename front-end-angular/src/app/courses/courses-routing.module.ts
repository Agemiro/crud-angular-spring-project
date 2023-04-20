import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from '../courses/containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CourseResolver } from './guards/course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'new-course',
    component: CourseFormComponent,
    resolve: { course: CourseResolver },
  },
  {
    path: 'edit-course/:id',
    component: CourseFormComponent,
    resolve: { courseResolver: CourseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
