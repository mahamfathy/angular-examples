import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private html!: HTMLElement;
  private readonly defaultLangKey = 'ar';
  private readonly languageKey: string = 'lang';
  private currentLang!: string;
  constructor(
    private translationService: TranslateService,
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.html = this.document.getElementsByTagName('html')[0];
    // this.html = this.document.documentElement;
    this.currentLang =
      this.localStorageService.getItem(this.languageKey) || this.defaultLangKey;
  }
  initAppLanguage(): void {
    this.translationService.setDefaultLang(this.currentLang);
    this.setLanguage(this.currentLang);
    // this.updateLayout();
  }
  changeLanguage(lang: string): void {
    this.translationService.use(lang);

    this.setLanguage(lang);
  }
  private setLanguage(lang: string): void {
    this.currentLang = lang;
    this.localStorageService.setItem(this.languageKey, lang);
    this.updateLayout();
  }
  private updateLayout(): void {
    this.html.lang = this.currentLang;

    this.document.body.dir = this.getDirection();
  }
  private getDirection(): string {
    return this.currentLang === this.defaultLangKey ? 'rtl' : 'ltr';
  }
}
