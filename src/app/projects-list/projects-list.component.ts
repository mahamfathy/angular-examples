import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.sass',
})
export class ProjectsListComponent {
  public projects: Array<Project> = [
    {
      id: 1,
      title: 'Project 1',
      imgUrl: 'https://via.placeholder.com/150',
      description: '',
    },
    {
      id: 2,
      title: 'Project 2',
      imgUrl: '',
      description: 'Project 2 description',
    },
    {
      id: 3,
      title: 'Project 3',
      imgUrl: 'https://via.placeholder.com/150',
      description: 'Project 3 description',
    },
  ];
  onProjectClick(project: Project): void {
    alert(project.title);
  }
}
