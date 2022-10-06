import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductService } from '../product.service';
import { CartService } from './../../cart.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {

  public baseUrl = environment.apiUrl;

  productList: any;

  constructor(private productsService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.viewProduct().subscribe(data => {
      this.productList = data;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.value });
      });
    })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

}
