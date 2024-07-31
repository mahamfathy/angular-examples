import { CommonModule, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.sass',
})
export class ProjectComponent implements OnChanges {
  date = new Date();
  amount = 50.56565444;
  @Input({ required: true }) project!: Project;
  @Input() title!: string;
  @Input({ required: true }) index!: number;
  @Output() viewProjectEvent = new EventEmitter<Project>();
  viewCourse(): void {
    this.viewProjectEvent.emit(this.project);
  }
  getCssClass(): string {
    return 'paragBorder';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(`%c ${this.project.title}`, 'color: red; font-size: 20px;');
  }
}
