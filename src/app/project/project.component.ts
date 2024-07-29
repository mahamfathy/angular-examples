import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.sass',
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) index!: number;
  @Output() viewProjectEvent = new EventEmitter<Project>();
  viewCourse(): void {
    this.viewProjectEvent.emit(this.project);
  }
  getCssClass(): string {
    return 'paragBorder';
  }
}
