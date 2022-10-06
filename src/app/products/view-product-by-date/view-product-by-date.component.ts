import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-view-product-by-date',
  templateUrl: './view-product-by-date.component.html',
  styleUrls: ['./view-product-by-date.component.scss']
})
export class ViewProductByDateComponent implements OnInit {

  public baseUrl = environment.apiUrl;

  productList: any;
  search: any

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.search = localStorage.getItem('search');
    this.productService.getProductByName(this.search).subscribe((data: any) => {
      this.productList = data;
    });
  }

}
