import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})
export class ListEmpComponent implements OnInit {
  employees: Employee[];  

  constructor(private empService: EmployeeService, private router: Router, ) { }  

  ngOnInit() {  
    this.empService.getEmployees()  
      .subscribe((data: Employee[]) => {  
        this.employees = data; 
        console.log(this.employees);
      },
      error =>{
        alert(error.message);
      }
      );  
  } 

  deleteEmp(employee: Employee): void {  
    this.empService.deleteEmployees(employee.id)  
      .subscribe(data => {
        console.log(data); 
        // this.ngOnInit();  // heavy cost for re-displaying this task bcoz server interaction
        this.employees = this.employees.filter(u => u !== employee);   // easy method to show
      })  
  }  
  editEmp(employee: Employee): void {  
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.id.toString());  
    this.router.navigate(['add-emp']);  
  } 
  tolist(){
    this.router.navigate(['list-emp']);
  } 
  toadd(){
    this.router.navigate(['add-emp']);
  } 

}
