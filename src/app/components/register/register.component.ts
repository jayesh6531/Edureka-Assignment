import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeRegister, Register } from 'src/app/interfaces/userregister';
import { UserregisterService } from 'src/app/services/userregister.service';

@Component({
  selector: 'assignment-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  constructor(private register : UserregisterService) { }

  ngOnInit(): void {
  }

  registration(){
    console.log(this.registerForm);
    this.register.register(this.registerForm.value as Register).subscribe(()=>{})
  }

}
