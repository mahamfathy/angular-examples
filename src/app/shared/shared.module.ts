import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
