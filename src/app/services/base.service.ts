import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    }
  }

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  get(relativeUrl: string): Observable<any> {
    const url = this.baseUrl + relativeUrl;
    return this.http.get(url);
  }

  post(relativeUrl: string, object: any): Observable<any> {
    const url = this.baseUrl + relativeUrl;
    return this.http.post(url, JSON.stringify(object), this.config)
  }

  put(relativeUrl: string, object: any): Observable<any> {
    const url = this.baseUrl + relativeUrl;
    return this.http.put(url, JSON.stringify(object), this.config);
  }

  delete(relativeUrl: string): Observable<any> {
    const url = this.baseUrl + relativeUrl;
    return this.http.delete(url, this.config)
  }

}
