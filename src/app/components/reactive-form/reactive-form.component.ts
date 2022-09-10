import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeRegister } from 'src/app/interfaces/userregister';
import { UserregisterService } from 'src/app/services/userregister.service';

@Component({
  selector: 'assignment-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm = new FormGroup({
    fullName : new FormControl(""),
    email : new FormControl(""),
    // address : new FormGroup({
    //   address : new FormControl(""),
    //   city : new FormControl("")
    // }),
    address : new FormControl(""),
    city : new FormControl(""),
    phoneNo : new FormControl(""),
    password : new FormControl(""),
    confirmPassword : new FormControl("")
  })

  constructor(private user : UserregisterService) { }

  ngOnInit(): void {
  }

  employeeRegistration(){
    console.log(this.registerForm);
    this.user.empregister(this.registerForm.value as EmployeeRegister).subscribe(()=> {})
    //this.user.empregister(this.registerForm.value as EmployeeRegister)
  }

}
