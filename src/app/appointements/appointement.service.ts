import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointement } from './appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
url="http://144.91.76.98:5002/api/Appointement";
  constructor(private http:HttpClient) { }
 
  getAppointement(){
    return this.http.get<Appointement[]>(this.url)
  }
}
