import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { Employee2 } from '../interfaces/employee2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  // private employeelist = [{
  //   employeeid : "2",
  //   name:"John",
  //   salary: "18000",
  //   age: "29"
  // },
  // {
  //   employeeid : "3",
  //   name:"Smith",
  //   salary: "20000",
  //   age: "36"
  // },
  // {
  //   employeeid : "4",
  //   name:"Amber",
  //   salary: "22000",
  //   age: "45"
  // },
  // {
  //   employeeid : "5",
  //   name:"Jhonny",
  //   salary: "25000",
  //   age: "55"
  // }
  // ]

  // public getEmployees(){
  //   return this.employeelist;
  // }

  constructor(private http:HttpClient, private config:ConfigurationService) { }

  public getEmployeesbyapi(rows : number = 4){
    return this.http.get<Employee2[]>(this.config.URLS.EMPLOYEES)
  }
}
