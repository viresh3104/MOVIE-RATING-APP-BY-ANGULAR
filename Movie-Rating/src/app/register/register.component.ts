import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fullname = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  msg = '';


  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void{

  }
  register(){
    if(this.username.trim().length ===0){
      this.msg = 'Username is required';
    } else if(this.password.trim().length === 0){
      this.msg = 'Password is required';
    } else if(this.fullname.trim().length === 0){
      this.msg = 'Fullname is required';
    } else if(this.email.trim().length === 0){
      this.msg = 'Email is required';
    } else if(this.password != this.confirmPassword){
      this.msg = 'Confirm Password not matches';
    } 
  }

  backtologin(){
    this.router.navigate(['/login']);
  } 
  about(){
    this.router.navigate(['./about']);
  }
}
