import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError } from 'rxjs';
import { Userregister } from 'src/app/interfaces/userregister';
import { UserregisterService } from 'src/app/services/userregister.service';

@Component({
  selector: 'assignment-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private reguser : UserregisterService) { }

  form = {
    email : "",
    fullname : "",
    phoneno : "",
    password : "",
    confirmpassword : "",
    terms : false
  }

  serverError : string = "";

  ngOnInit(): void {
  }

  userRegistration(userRegForm : Form){
    //console.log(this.form);
    console.log(userRegForm);
    this.reguser.userregister(this.form as Userregister).pipe(catchError((err)=>{
      this.serverError = "Error While Register."
      return err;
    }))
    .subscribe(()=>{

    })

    //this.reguser.empregister(this.form.value as EmployeeRegister).subscribe(()=>{})

  }

}
