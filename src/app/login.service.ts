import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  login(user: any): Observable<any> {
    const baseUrl = environment.apiUrl + "api/v1/auth";
    return this.HttpClient.post<any>(baseUrl, user);
  }
}
