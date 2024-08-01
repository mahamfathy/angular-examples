import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  hide = signal(true);
  password!: number;
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  // login(loginForm: NgForm, event: Event): void {
  //   loginForm.onSubmit(event);
  //   console.log(loginForm, loginForm.value);
  // }
  login(loginForm: NgForm): void {
    console.log(loginForm, loginForm.value);
  }
  onEmailChange(email: string): void {
    console.log('email', email);
  }
}
