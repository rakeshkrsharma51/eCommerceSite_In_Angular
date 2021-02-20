import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://www.mocky.io/v2/5eda4003330000740079ea60';

  constructor(public http: HttpClient) {}

  getData(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(this.url);
  }
}
