import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
        this.employees = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

}
