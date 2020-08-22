import { ToDoModel } from './../../Interfaces/ToDoModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  urls={
    all:'https://localhost:5001/todo/getall',
    getById:'https://localhost:5001/todo/getbyid/',
    delete:'',
    update:'',
    create:''
  }

  constructor(private http:HttpClient) { }

  addAuthToken():object{
    let bearerAuth = 'Bearer ' + sessionStorage.getItem('token');

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: bearerAuth
      })
    };

    return httpOptions;
  }

  getAllTodos() :Observable<ToDoModel[]>{

    return this.http.get<ToDoModel[]>(this.urls.all,this.addAuthToken());

  }

  getById(objectId:string) : Observable<ToDoModel>{

    return this.http.get<ToDoModel>(this.urls.getById + objectId,this.addAuthToken());
  }
}
