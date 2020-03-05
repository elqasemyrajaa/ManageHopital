import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  url="http://144.91.76.98:5002/api/Hospital";
  constructor(private http:HttpClient) { }
  /**************************Get All Hopitals**************************** */
  getAllHopitaux(){
    return this.http.get<Hospital[]>(this.url)
  }

}
