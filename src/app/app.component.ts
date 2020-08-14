import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoModel } from 'src/Interfaces/ToDoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todolist';

  constructor(private httpClient: HttpClient){}


  todo = {
    activity: 'Watch',
    completed : false,
    deadline: new Date()
  };

    ngOnInit(): void {
      this.httpClient.get('https://localhost:5001/todo/getbyactivity?activity=Watch')
      .subscribe((data: ToDoModel) => {
        console.log(data);
      });
    }
}
