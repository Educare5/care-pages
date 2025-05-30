import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../model/student';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

  createSheet(name: string,
    currentLocation: string,
    standard: string,
    phoneNumber: string,
    email: string,
    subject: string): Observable<student> {

    return this.http.post<student>(`${environment.prod_url}`, {
      name,
      currentLocation,
      standard,
      phoneNumber,
      email,
      subject
    });
  }

}
