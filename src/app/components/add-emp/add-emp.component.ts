import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {

  empformlabel: string = 'Add Employee';  
  empformbtn: string = 'Save'; 
  employees: Employee[];
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {  
  }  
  addForm: FormGroup;  
  btnvisibility: boolean = true;  
  ngOnInit() {  
    this.empService.getEmployees().subscribe((res)=>{
      this.employees = res;
      console.log(this.employees);
    })
    this.addForm = this.formBuilder.group({  
      id: [],  
      employee_name: ['', Validators.required],  
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],  
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]  
    });  
  
    let empid = localStorage.getItem('editEmpId'); 
    console.log(empid, 'from    empiiiiddddddddddddddddddd'); 
    if (empid) {  
      this.empService.getEmployeeById(+empid).subscribe(data => {  
        this.addForm.patchValue(data);  
      })  
      this.btnvisibility = false;  
      this.empformlabel = 'Edit Employee';  
      this.empformbtn = 'Update';  
    }  
  } 
  // oninit finish
  tohome(){
    this.router.navigate(['list-emp'])
  }

  onSubmit() {  
    console.log('Create fire', this.addForm.value);
      
    this.empService.createUser(this.addForm.value)  
      .subscribe((data:any) => { 
        console.log(data);
        this.addForm.value.id = data.id;
        this.router.navigate(['list-emp']);  
      },  
      error => {  
        alert(error);  
      });  
  } 
  
  onUpdate() {  
    console.log('Update fire'); 
    localStorage.removeItem('editEmpId');  
    this.empService.updateEmployee(this.addForm.value).subscribe(data => {  
      this.router.navigate(['list-emp']);  
    },  
      error => {  
        alert(error);  
      });  
  }  
  

}
