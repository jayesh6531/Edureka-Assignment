import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee2 } from 'src/app/interfaces/employee2';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'assignment-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  //public employeedata : Employee2[] = this.employees.getEmployees();
  
  
  public employeedata : Employee2[] | null = null;

  constructor(private employees: EmployeeserviceService) { }

  ngOnInit(): void {

    this.employees.getEmployeesbyapi().subscribe((response)=>{
      console.log(response);
      this.employeedata = response;
    })
    
  }
}
