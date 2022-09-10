import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  

  constructor(private http : HttpClient, private config : ConfigurationService) { }

  

}
