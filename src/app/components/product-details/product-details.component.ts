import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'assignment-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetaillisting : null | Observable<Products[]> = null;

  constructor(private products : ProductsService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const {category} = params
      // this.productDetaillisting = this.products.getProducts(category)
      // .pipe(catchError(()=>{
      //   this.router.navigateByUrl("/notfound");
      //   return of([])
      // }))
    })

  }

}
