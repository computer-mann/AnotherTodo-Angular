import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient) { }

  todoList: Observable<ToDoModel[]>;

  ngOnInit(): void {
    this.todoList = this.httpClient.get<ToDoModel[]>(this.alltodo);
    console.log(this.todoList);
  }

  AddToButton(event) {
    alert('Gel');
  }

}
