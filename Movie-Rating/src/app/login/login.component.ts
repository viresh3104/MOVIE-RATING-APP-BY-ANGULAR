import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username ='';
  password='';
  errormsg='';

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void{

  }

  login(){
    if(this.username.trim().length === 0){
      this.errormsg = 'Username is required';
    } else if(this.password.trim().length === 0){
      this.errormsg = 'Password is required';
    } else{
      this.errormsg = '';
      let res = this.auth.login(this.username , this.password);
      if (res === 200){
         this.router.navigate(['home']);
      }
      if (res === 403){
        this.errormsg = "Invalid Credentials"
     }
    }
  }
  about(){
    this.router.navigate(['about']);
  }
  register(){
    this.router.navigate(['register']);
  }
}
