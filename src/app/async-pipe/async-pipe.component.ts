import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';

import { ICourse } from '@app/models';
import { CourseService } from './course.service';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})
export class AsyncPipeComponent implements OnInit {

  courses: ICourse[] = [];
  courses$!: Observable<ICourse[]>;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.courses$ = this.courseService.getCourses().pipe(tap(courses => courses.sort((a,b) => a.sequenceNumber - b.sequenceNumber)));
    this.courses$.subscribe(courses => this.courses = courses);
    // this.courseService.getCourses().subscribe(courses => this.courses = courses.sort((a,b) => a.sequenceNumber - b.sequenceNumber));

    // this.courseService.getCourses().subscribe(courses => this.courses = courses.sort((a,b) => a.sequenceNumber - b.sequenceNumber));
    // this.courseService.getCourses().subscribe((courses) => {
    //   this.courses = courses
    // });
  }
}
