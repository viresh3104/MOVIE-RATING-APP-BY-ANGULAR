import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  register(fname:string,email:string,uname:string,pword:string){
    
  }

  login(uname:string, pword:string){
    if(uname === "viresh" && pword === '1234'){
      return 200;
    } else{
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login']);
  }
}
