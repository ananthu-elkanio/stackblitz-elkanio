import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    const url = `${this.apiUrl}/api/users`;
    return this.http.get(url);
  }
}
