import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userlogin } from '../interfaces/userlogin';
import { EmployeeRegister, Login, Register, Userregister } from '../interfaces/userregister';
import { ConfigurationService } from './configuration.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  info : BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http:HttpClient, private config : ConfigurationService, private router : Router) {

    //stop logout on page load
    const userinfo = window.sessionStorage.getItem("userinfo");
     if(userinfo)
      {
          this.info.next(JSON.parse(userinfo))
      }

  }

  //template driven form
  public userregister(form : Userregister){
    return this.http.post(this.config.URLS.USERREGISTER, form)
  }


  //reactive form
  public empregister(form : EmployeeRegister){
    return this.http.post(this.config.URLS.EMPREGISTER, form)
  }

  //login
  public login(form : Login){
    //return this.http.post(this.config.URLS.LOGIN, form)
    this.http.post(this.config.URLS.LOGIN, form).subscribe((response:any)=>{
      //console.log(response)
      //window.sessionStorage.setItem("accessToken", response.accessToken)
      this.info.next(response)
      const {accessToken, ...userInfo} = response
      window.sessionStorage.setItem("accessToken", accessToken)
      window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.router.navigateByUrl("/");
    })
  }

  //logout
  public logout(){
    this.info.next(null);
    window.sessionStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("userInfo");
    this.router.navigateByUrl("/");
  }

  //register
  public register(form : Register){
    return this.http.post(this.config.URLS.REGISTER, form)
  }

}
