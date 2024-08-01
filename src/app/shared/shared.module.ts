import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [TranslateModule, CommonModule, FormsModule],
  exports: [TranslateModule, CommonModule, FormsModule],
})
export class SharedModule {}
