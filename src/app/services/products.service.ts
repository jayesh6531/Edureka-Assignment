import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient, private config:ConfigurationService) { }

  public getProducts(rows : number = 4){
    return this.http.get(this.config.URLS.PRODUCTS)
  }
}
