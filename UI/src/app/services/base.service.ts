import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(public http: HttpClient) {}

  getAllData(path): Observable<any> {
    return this.http.get<any>(environment.apiUrl + path);
  }

  insertData(path, param): Observable<any> {
    return this.http.post<any>(environment.apiUrl + path, param);
  }

  updateData(path, param): Observable<any> {
    return this.http.put<any>(environment.apiUrl + path, param);
  }

  deleteData(path, param): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + path, param);
  }
}
