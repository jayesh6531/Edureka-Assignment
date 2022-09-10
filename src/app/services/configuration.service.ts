import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  public API_Base_URL = "http://dummy.restapiexample.com/api/v1";
  public API_LOCAL_URL = "http://localhost:3000"

  public URLS = {
    EMPLOYEES : `${this.API_Base_URL}/employees`,
    PRODUCTS : `https://fakestoreapi.com/products`,
    USERREGISTER : `${this.API_LOCAL_URL}/templateuser`,
    EMPREGISTER : `${this.API_LOCAL_URL}/reactiveuser`,
    REGISTER : `${this.API_LOCAL_URL}/register`,
    LOGIN : `${this.API_LOCAL_URL}/login`
  }

}
