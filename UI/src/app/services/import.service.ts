import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ImportService extends BaseService {
  constructor(private httpService: HttpClient){
    super(httpService);
  }
  controller = 'ImportExcels';
}
