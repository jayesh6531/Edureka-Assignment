import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

// const employeedata = [{
//   employeeid : "S100",
//   firstname:"Jayesh",
//   lastname: "Shamnani",
//   salary: "40000",
//   dob: "19-11-1993",
//   email: "jayeshshamnani@gmail.com"
// },
// {
//   employeeid : "S200",
//   firstname:"Jayesh",
//   lastname: "Shamnani",
//   salary: "40000",
//   dob: "19-11-1993",
//   email: "jayeshshamnani@gmail.com"
// },
// {
//   employeeid : "S300",
//   firstname:"Jaya",
//   lastname: "Sharma",
//   salary: "30000",
//   dob: "19/11/1994",
//   email: "jayasharma@gmail.com"
// },
// ]

const emplist = [{
  employeeid : "2",
  firstname:"John",
  lastname: "Smith",
  salary: "10000",
  dob: "1983-11-02T04:28:46Z",
  email: "john@abc.com"
},
{
  employeeid : "3",
  firstname:"Jasan",
  lastname: "Smith",
  salary: "12000",
  dob: "1980-08-12T04:28:46Z",
  email: "jasan@abc.com"
},
{
  employeeid : "4",
  firstname:"Ambar",
  lastname: "Dorothy",
  salary: "30000",
  dob: "1985-04-05T04:28:46Z",
  email: "amber@abc.com"
},
{
  employeeid : "5",
  firstname:"Mark",
  lastname: "Frank",
  salary: "30000",
  dob: "2021-12-18T04:28:46Z",
  email: "mark@abc.com"
}
]

@Component({
  selector: 'assignment-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public isshowEdit : boolean = false;
  public isShowHide : boolean = true;

  //public EmployeeInfo : Employee[] = employeedata;  
  public EmployeeInfo : Employee[] = emplist;  

  constructor() { }

  ngOnInit(): void {
  }

  EditEmp(employee:Employee){
    employee.showEdit = true
  }

  UpdateEmp(employee:Employee){
    // this.isshowEdit = false;
    // this.isShowHide = true;
    employee.showEdit = false
  }

}
