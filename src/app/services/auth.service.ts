import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   registerUrl="https://localhost:5001/account/register";
   loginUrl="https://localhost:5001/account/login"
  constructor(private httpClient:HttpClient) { }

  login(formData):Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(this.loginUrl,formData,{ observe:'response'});
  }

  register(formData):Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(this.registerUrl, formData, { observe: 'response' });
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
}
