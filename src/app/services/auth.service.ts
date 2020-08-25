import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   registerUrl="https://localhost:5001/account/register";
   loginUrl="https://localhost:5001/account/login"
  logOutUrl ="https://localhost:5001/account/logout";
  constructor(private httpClient:HttpClient) { }

  login(formData):Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(this.loginUrl,formData,{ observe:'response'});
  }

  register(formData):Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(this.registerUrl, formData, { observe: 'response' });
  }

  logout(){
    this.httpClient.post<any>(this.logOutUrl,{},this.addAuthToken()).subscribe();
  }

  getAccessToken():string{
    return sessionStorage.getItem('token');
  }

  setToken(accessToken:string){
    sessionStorage.setItem('token',accessToken);
  }

  isLoggedIn():boolean{
    return !!sessionStorage.getItem('token');
  }

  removeAccessToken(){
    sessionStorage.removeItem('token');
  }

  addAuthToken(): object {
    let bearerAuth = 'Bearer ' + sessionStorage.getItem('token');

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: bearerAuth
      })
    };

    return httpOptions;
  }
}
