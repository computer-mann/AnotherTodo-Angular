import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ListtodoComponent } from '../listtodo/listtodo.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { RegisterComponent } from '../register/register.component';


const components=[
  LoginComponent,
  RegisterComponent,
  ListtodoComponent,
  HomeComponent,
  PageNotFoundComponent,
  TodoDetailComponent
]


@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    ListtodoComponent,
    HomeComponent,
    PageNotFoundComponent,
    TodoDetailComponent

  ],

  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ListtodoComponent,
    HomeComponent,
    PageNotFoundComponent,
    TodoDetailComponent
  ]

})
export class CreatedComponentsModule { }
