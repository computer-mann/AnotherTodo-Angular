import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage:string;

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

   onSubmitForm(){
        this.auth.login(this.loginForm.value).subscribe(response=>{
          this.errorMessage='';
          if(response.status == 200){
            sessionStorage.setItem('token', response.headers.get('jwt-access-token'));
            this.router.navigate(['/todo-all']);
          }else{

          }
        }
        ,error=>{
          this.errorMessage=error.error.report;
          console.log(error.error)}
        );
      }

}
