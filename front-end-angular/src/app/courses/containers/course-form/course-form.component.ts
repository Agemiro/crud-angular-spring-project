import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  formData = this.formBuilder.group({
    id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.formData.setValue({
      id: course.id,
      name: course.name,
      category: course.category,
    });
  }

  onSumit() {
    this.service.save(this.formData.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
  }

  private onError() {
    this._snackBar.open('An error occurred while creating the course.', '', {
      duration: 5000,
    });
  }

  private onSucess() {
    this._snackBar.open('Course created successfully.', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }
}
