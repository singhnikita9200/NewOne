import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url="https://reqres.in/api/login";
  isLogin:boolean = false;
  token:any;
  constructor(private http: HttpClient, private router : Router) { }

  LogIn(loginval:any){    
    return this.http.post(this.url,loginval)
  }

  isLoggedIn() {
     this.token = localStorage.getItem('login_token');
    if (this.token!=undefined)
    {
      this.isLogin = true;
    }
    else{
      localStorage.clear();
      window.location.href = "/login";
    }
    return this.isLogin;
  }
}
