import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers : [ EmployeeService ],
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getAllEmployees().subscribe(
      (response: Employee[])=>{
        console.log("Updated list: " + response);
        this.employees = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  private addEmployee(addForm: NgForm){
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response : Employee)=>{
        console.log("Added Employee " + response)
        this.getEmployees();
      }
    )
  }

  private editEmployee(editForm : NgForm){
    this.employeeService.updateEmployee(editForm.value).subscribe(
      (response : Employee)=>{
        console.log("Employee edited: " + response)
        this.getEmployees();
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      })
  }

  private deleteEmployeeById(id: number){
    this.employeeService.deleteEmployeeById(id).subscribe(
      (response: void)=>{
        console.log("deleted " + response);
        this.getEmployees();
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  

}
