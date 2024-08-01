import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translationService: TranslateService) {}

  initAppLanguage(): void {
    this.translationService.setDefaultLang('en');
  }
}
