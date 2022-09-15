import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  public selectedEmployee!: Employee; 

  constructor(private employeeService: EmployeeService, private modalService: NgbModal) { }

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

  public addEmployee(addForm: NgForm){
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response : Employee)=>{
        console.log("Added Employee " + response)
        this.getEmployees();
      }
    )
  }

  public editEmployee(editForm : NgForm){
    this.employeeService.updateEmployee(editForm.value).subscribe(
      (response : Employee)=>{
        console.log("Employee edited: " + response)
        this.getEmployees();
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      })
  }

  public deleteEmployeeById(id: string){
    if(id !== this.selectedEmployee?.id){
      //toast "they do not match"
    }else{
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

  openModal(employee: Employee, content: any){
    this.selectedEmployee = employee;
    console.log(employee);
    this.modalService.open(content);
  }

  public openAddModal(content: any){
    this.modalService.open(content);
  }

  

}
