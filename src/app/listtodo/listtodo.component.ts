import { TodoServiceService } from './../services/todo-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDoModel } from 'src/Interfaces/ToDoModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {

  getTodo = 'https://localhost:5001/todo/getbyactivity?activity=Watch';
  alltodo = 'https://localhost:5001/todo/getall';

  constructor(private todoService:TodoServiceService,private router:Router) { }

  todoList: Observable<ToDoModel[]>;

  ngOnInit(): void {


    this.todoList = this.todoService.getAllTodos();

  }

  goToDetails(objectId:string){
    this.router.navigate(['/todo-details',objectId]);
  }

  AddToButton(event) {
    alert('Gel');
  }

}
