import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  public API_Base_URL = "http://dummy.restapiexample.com/api/v1";

  public URLS = {
    EMPLOYEES : `${this.API_Base_URL}/employees`
  }

}
