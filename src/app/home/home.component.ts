import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loggedIn=this.authService.isLoggedIn();
  }

  logoutFunction(event){
    this.authService.removeAccessToken();
    this.loggedIn = this.authService.isLoggedIn();

  }

}
