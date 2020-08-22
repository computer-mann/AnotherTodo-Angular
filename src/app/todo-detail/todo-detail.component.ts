import { TodoServiceService } from './../services/todo-service.service';
import { ToDoModel } from './../../Interfaces/ToDoModel';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  id:string;


  todoDetail : any = {};


  constructor(private activatedRoute: ActivatedRoute,private todoService:TodoServiceService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.getById(this.id).subscribe(data=>{
      this.todoDetail=data;
    })

  }

  goBack(){
    window.history.back();
  }
}
