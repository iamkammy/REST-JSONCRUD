import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient ) {} 
  baseUrl:string = 'http://localhost:3000/employees';

  private _getHeaders():Headers {
    let header = new Headers({
      'Content-Type': 'application/json'
    });
 
    return header;
 }

  getEmployees() {  
    return this.http.get<Employee[]>(this.baseUrl);  
  } 

  deleteEmployees(id: number) {  
    alert("really");
    return this.http.delete<Employee[]>(this.baseUrl +'/'+ id);  
  }  

  createUser(employee: Employee) { 
   
    return this.http.post(this.baseUrl, JSON.stringify(employee),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });  
  } 

  getEmployeeById(id: number) {  
    return this.http.get<Employee>(this.baseUrl + '/' + id);  
  } 

  updateEmployee(employee: Employee) {  
    return this.http.put(this.baseUrl + '/' + employee.id, employee);  
  }  
  

}
