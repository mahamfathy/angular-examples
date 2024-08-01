import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}
  title = 'my-portfolio';

  ngOnInit(): void {
    this.initApplang();
  }
  onkeyUp(title: string): void {
    this.title = title;
  }
  private initApplang(): void {
    this.languageService.initAppLanguage();
  }
}
