import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IProduct } from '../models/interfaces';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{


  public productList:IProduct[] = [];
  constructor(private _router: Router,private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((data) => {
    this.productList = data;
    });
  }

  navigateToDashboard(){
    this._router.navigate(['dashboard']);
  }

}
