import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = '';

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.localApi;
  }


  getDatas(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/Person/GetAll');
  }

  save(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/Person/Save', data);
  }
}
