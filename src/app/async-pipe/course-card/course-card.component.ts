import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ICourse } from '@app/models';
import { CategoryType } from '@app/enums';
import { attachmentUrl } from '@app/constant';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class CourseCardComponent {

  course = input.required<ICourse>();
  readonly categoryType = CategoryType;
  readonly attachmentUrl = attachmentUrl;

  constructor(private router: Router) {}

  viewCourse(): void {
    this.router.navigateByUrl(`core/course/${this.course().scrambledId}`);
  }
}
