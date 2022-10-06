import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../site-layout/categories';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl = environment.apiUrl;

  constructor(
    private HttpClient: HttpClient
  ) { }

  createProduct(productBody: any): Observable<Product> {
    const baseUrl = this.baseUrl + "api/v1/products";
    return this.HttpClient.post<Product>(baseUrl, productBody);
  }

  viewProduct(): Observable<Product> {
    const baseUrl = this.baseUrl + "api/v1/products";
    return this.HttpClient.get<Product>(baseUrl);
  }

  searchCategoryProduct(categoryId: any): Observable<Product> {
    const baseUrl = this.baseUrl + "api/v1/products?subCategoryId=" + categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }

  searchSubCategoryProduct(categoryId: any): Observable<Product> {
    const baseUrl = this.baseUrl + "api/v1/sub-categories/" + categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }

  Product(categoryId: any): Observable<Product> {
    const baseUrl = this.baseUrl + "api/v1/products/" + categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }

  getProductByName(name: any): Observable<Product> {
    const baseUrl = this.baseUrl + "api/v1/products?title=" + name;
    return this.HttpClient.get<Product>(baseUrl);
  }

  createCategory(category: any): Observable<Category> {
    const categoryUrl = this.baseUrl + "api/v1/categories";
    return this.HttpClient.post<Category>(categoryUrl, category);
  }

  getCategory() {
    const categoryUrl = this.baseUrl + "api/v1/categories";
    return this.HttpClient.get<Category>(categoryUrl);
  }

  createSubCategory(subCateg: any): Observable<any> {
    const subCategoryUrl = this.baseUrl + "api/v1/sub-categories/"
    return this.HttpClient.post<any>(subCategoryUrl, subCateg);
  }

  getSubCategory(categoryId: any) {
    const subCategoryUrl = this.baseUrl + "api/v1/sub-categories/" + categoryId;
    return this.HttpClient.get(subCategoryUrl);
  }

  getSize() {
    const SizeUrl = this.baseUrl + "api/v1/sizes"
    return this.HttpClient.get(SizeUrl);
  }
}

