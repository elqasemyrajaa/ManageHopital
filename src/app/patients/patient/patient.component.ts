import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as patientActions from '../store/patient.actions';
import * as fromPatient from "../store/patient.reducer";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
  constructor(private store:Store<any>) { 
    
  }

  ngOnInit() {
    
  }

}
