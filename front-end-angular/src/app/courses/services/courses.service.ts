import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      //delay(3000),
      tap((courses) => console.log(courses))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(course: Partial<Course>) {
    if (course.id) {
      return this.update(course);
    }
    return this.create(course);
  }

  private create(course: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, course);
  }

  private update(course: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${course.id}`, course);
  }
}
