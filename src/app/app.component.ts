import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TranslationService } from './shared/services/translation.service';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectsListComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  translationService = inject(TranslationService);
  ngOnInit(): void {
    this.translationService.setDefaultLang('ar');
  }
  onkeyUp(title: string): void {
    this.title = title;
  }
}
