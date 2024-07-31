import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ICourse } from '@app/models';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private readonly firebaseUrl = 'https://coding-from-a-to-z-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse>(`${this.firebaseUrl}/courses.json`).pipe(map(
      (courses) => {
        return Object.entries(courses).map(([key, value]) => ({
          id: value.id,
          scrambledId: key,
          name: value.name,
          description: value.description,
          category: value.category,
          imageUrl: value.imageUrl,
          lessons: value.lessons,
          sequenceNumber: value.sequenceNumber
        }));
      }
    ));
  }
}
