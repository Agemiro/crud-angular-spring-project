import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Error when trying to search courses');
        return of([]);
      })
    );
  }

  onError(errorMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new-course'], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    this.router.navigate(['edit-course', course.id], {
      relativeTo: this.route,
    });
  }
}