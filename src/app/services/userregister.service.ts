import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeRegister, Userregister } from '../interfaces/userregister';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http:HttpClient, private config : ConfigurationService) { }

  public userregister(form : Userregister){
    return this.http.post(this.config.URLS.USERREGISTER, form)
  }

  public empregister(form : EmployeeRegister){
    return this.http.post(this.config.URLS.EMPREGISTER, form)
  }

}
