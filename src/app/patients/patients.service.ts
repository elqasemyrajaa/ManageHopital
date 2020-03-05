import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from './patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
url="http://144.91.76.98:5002/api/Patient";
  constructor(private http:HttpClient) { }
  getPatientsById(id:number){
    return this.http.get<Patients>(this.url+'/'+id)
  }
  getPatients(){
    return this.http.get<Patients[]>(this.url)
  }
}
