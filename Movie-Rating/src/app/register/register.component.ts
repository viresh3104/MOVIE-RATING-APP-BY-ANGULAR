import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  fullname = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  error_msg = '';
  success_msg = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  register() {
    if (this.username.trim().length === 0) {
      this.error_msg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.error_msg = 'Password is required';
    } else if (this.fullname.trim().length === 0) {
      this.error_msg = 'Name is required';
    } else if (this.email.trim().length === 0) {
      this.error_msg = 'Email is required';
    } else if (this.password != this.confirmPassword) {
      this.error_msg = 'Confirm Password not matches';
    } else {
      this.success_msg = 'Registration Successful Back to login'
    }
  }

  backtologin() {
    this.router.navigate(['/login']);
  }
  about() {
    this.router.navigate(['./about']);
  }
}
