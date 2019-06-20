import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { ListEmpComponent } from './components/list-emp/list-emp.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";  
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ListEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

