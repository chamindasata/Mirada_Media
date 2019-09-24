import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public errorMsg="";
public isLoader=false;

  public loginForm=new FormGroup({
    userName:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  })

  constructor(public _userService:UserService,public router:Router) { }

  ngOnInit() {
    // this.errorMsg="";
    localStorage.clear();
  }

  login(login){
    this.isLoader=true;
    this.errorMsg="";
    localStorage.clear();
    let user={
      Username:login.userName,
      Password:login.password
    }
    this._userService.userLogin(user).subscribe(
      res=>{
     
      
        // let authToken=res.token_type +" "+res.access_token;
        localStorage.setItem("Access_token",res.access_token);
        this.router.navigateByUrl('/dashboard')
        this.isLoader=false;
      },
      error=>{
        this.errorMsg=error.error.error;
        this.isLoader=false;
          // console.log("error:" +error.error.error.error);
      },
      ()=>{
        this.isLoader=false;
      }
    );
    
  }

}
