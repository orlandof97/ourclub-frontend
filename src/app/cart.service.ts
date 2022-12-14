import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public teste = ""

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemList = JSON.parse(localStorage.getItem("cart") || '')
    const alreadyExist = this.cartItemList.filter((item: any) => {
      if (item.id === product.id && item.sizeId === product.sizeId && item.name === product.name && item.number === product.number) {
        item.quantity += 1;
        item.total = item.value * item.quantity;
      }
      return item.id === product.id && item.sizeId === product.sizeId && item.name === product.name && item.number === product.number
    });

    if (alreadyExist.length === 0) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }

    localStorage.setItem("cart", JSON.stringify(this.cartItemList));
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    this.cartItemList = JSON.parse(localStorage.getItem("cart") || '');
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList = JSON.parse(localStorage.getItem("cart") || '');
    this.cartItemList.map((a: any, index: any) => {

      if (product.id === a.id && a.quantity === 1 && a.sizeId === product.sizeId && a.name === product.name && a.number === product.number) {
        this.cartItemList.splice(index, 1);
      } else if (product.id === a.id && a.sizeId === product.sizeId && a.name === product.name && a.number === product.number) {
        a.quantity -= 1;
        a.total = a.value * a.quantity;
      }
    })
    localStorage.setItem("cart", JSON.stringify(this.cartItemList));
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  getCart() {
    return JSON.parse(localStorage.getItem("cart") || '');
  }

}
