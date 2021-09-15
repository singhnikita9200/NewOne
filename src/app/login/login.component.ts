import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Loginform!: FormGroup;
  tokenn:any;
  loginToken:any;

  constructor(public fb: FormBuilder, public authservice:AuthenticationService, private router : Router) { 
    this.Loginform = this.fb.group({
      email: [''],
      password: ['']

    })
  }

  ngOnInit(): void {
  }
  Submit(val:any){
    console.log(val);
  this.authservice.LogIn(val).subscribe((res)=>{
    console.log(res);
    this.tokenn=res
   this.loginToken=this.tokenn.token
    localStorage.setItem("login_token",this.loginToken);
    this.router.navigate(['/dashboard']);
    
  },(err)=>{
    console.log(err);
    
  })
  }

}
