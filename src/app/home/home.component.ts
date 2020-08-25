import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn:boolean;
  username:string;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loggedIn=this.authService.isLoggedIn();

    if(this.loggedIn){

       var decoded=jwt_decode(sessionStorage.getItem('token'));
       this.username=decoded.unique_name;
     console.log(decoded);
     console.log(new Date(decoded.nbf));
    }
  }

  logoutFunction(event):void{
    this.authService.logout();
    this.authService.removeAccessToken();
    this.loggedIn = this.authService.isLoggedIn();

  }

}
