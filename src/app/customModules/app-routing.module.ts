import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { AuthGuard } from '../guards/auth.guard';
import { ListtodoComponent } from '../listtodo/listtodo.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
   {path:"login", component: LoginComponent},
   {path:"register", component: RegisterComponent},
   {path:"todo-all",component: ListtodoComponent,canActivate:[AuthGuard]},
   {path:"todo-details/:id",component:TodoDetailComponent,canActivate:[AuthGuard]},
   {path:"", component: HomeComponent},
   {path:"**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
