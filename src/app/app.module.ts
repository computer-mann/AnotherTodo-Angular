
import { TodoServiceService } from './services/todo-service.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapNgModule } from './customModules/bootstrap-ng.module';
import { CreatedComponentsModule } from './customModules/components.module';
import { AppRoutingModule } from './customModules/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BootstrapNgModule,
    CreatedComponentsModule

  ],
  providers: [AuthService,AuthGuard,TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
