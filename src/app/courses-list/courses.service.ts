import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Courses } from './courses.helper';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = Courses;

  constructor() { }

  public getCourses(): Course[] {
    return this.courses;
  }

  public getCourse(id: number): Course | undefined {
    return this.courses[id];
  }

  public createCourse(course: Course): number {
    course.id = this.courses.length;
    this.courses.push(course);
    return course.id;
  }
}
