import { Component, OnInit } from '@angular/core';
import { Login, Register } from 'src/app/interfaces/userregister';
import { UserloginService } from 'src/app/services/userlogin.service';
import { UserregisterService } from 'src/app/services/userregister.service';


@Component({
  selector: 'assignment-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public form : Login = { email : "", password : "" }

  constructor(private userService : UserregisterService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.form);
    //this.userService.login(this.form as Register).subscribe(()=>{ })
    this.userService.login(this.form as Register)
  }

}
