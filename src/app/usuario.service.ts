import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public baseUrl = environment.apiUrl;

  constructor(
    private HttpClient: HttpClient
  ) { }

  addUser(user: any): Observable<any> {
    const baseUrl = this.baseUrl + "api/v1/users";
    return this.HttpClient.post<any>(baseUrl, user);
  }

  addAdress(adress: any): Observable<any> {
    const baseUrl = this.baseUrl + "api/v1/adresses";
    return this.HttpClient.post<any>(baseUrl, adress);
  }

  addSale(sale: any): Observable<any> {
    const baseUrl = this.baseUrl + "api/v1/sales";
    return this.HttpClient.post<any>(baseUrl, sale);
  }

  getSales(saleUser: any): Observable<any> {
    const baseUrl = this.baseUrl + "api/v1/sales?userId=" + saleUser;
    return this.HttpClient.get(baseUrl);
  }

  getAllSales() {
    const baseUrl = this.baseUrl + "api/v1/sales";
    return this.HttpClient.get(baseUrl);
  }

  updateTracking(tracking: any, deliveryId: any): Observable<any> {
    const baseUrl = this.baseUrl + "api/v1/sales/" + deliveryId;
    return this.HttpClient.patch<any>(baseUrl, tracking);
  }

}
