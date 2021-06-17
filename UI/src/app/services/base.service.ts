import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(public http: HttpClient) {

  }
  host = environment.host;
  controller = "";

  getApiUrl(): string {
    return `${this.host}/api/v1/${this.controller}`;
  }

  getAllData(): Observable<any> {
    return this.http.get<any>(this.getApiUrl());
  }

  insertData(param): Observable<any> {
    return this.http.post<any>(this.getApiUrl(), param);
  }

  updateData(param): Observable<any> {
    return this.http.put<any>(this.getApiUrl(), param);
  }

  deleteData(id): Observable<any> {
    return this.http.delete<any>(`${this.getApiUrl()}/${id}`);
  }

  deleteMultipleData(listIttemDelete): Observable<any> {
    return this.http.post<any>(`${this.getApiUrl()}/delete-multiple`, listIttemDelete);
  }
}
