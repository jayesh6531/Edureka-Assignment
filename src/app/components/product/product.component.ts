import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'assignment-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productListing : Products[] | null = null;

  //productListing : null | Observable<Products[]> = null

  constructor(private product : ProductsService) { }

  ngOnInit(): void {

    this.product.getProducts().subscribe((response : any)=>{
      //console.log(response);
      this.productListing = response
    })

  }

  getProductDetails(productdetail : Products){
    this.product.getProducts().subscribe((response : any)=>{
      console.log(productdetail);
      this.product = response.id
      alert(productdetail)
    })
    
  }

}
