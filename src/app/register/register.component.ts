import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    SharedModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass',
})
export class RegisterComponent {
  form: FormGroup;
  userName = new FormControl<string>('test', {
    updateOn: 'blur',
    nonNullable: false,
  });
  constructor() {
    this.form = this.getFormModels();
  }
  private getFormModels(): FormGroup {
    return new FormGroup({
      userName: this.userName,
      email: new FormControl<string>({ value: '', disabled: false }),
      password: new FormControl(''),
      mobile: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }
  reset(): void {
    this.userName.reset({ value: 'maha', disabled: false });
  }
}
