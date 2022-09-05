import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';


@Component({
  selector: 'assignment-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(""),
    password : new FormControl("")
  })

  constructor(private userloginservice : UserloginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm);
   //this.user.empregister(this.registerForm.value as EmployeeRegister).subscribe(()=>{})
  }

}
