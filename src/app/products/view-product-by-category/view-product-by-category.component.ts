import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartService } from './../../cart.service';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {

  public baseUrl = environment.apiUrl;

  searchCategory: any;
  productList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data.id;

      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
        this.productList = categoryData;

        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.value });
        });

      })
    })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
