import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Project } from '../project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.sass',
})
export class ProjectsListComponent implements OnInit {
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
  ngOnInit(): void {
    timer(3000).subscribe(() => {
      this.projects[0].title = 'welcome to courses';
    });
  }
}
