import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HospitalsActions from '../store/hopital.actions'

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
hospitals
  constructor(private store:Store<any>) { 
    this.store.dispatch(new HospitalsActions.LoadHospitals())
     this.store.subscribe(state=>{
      this.hospitals=state.hospital.hospitals
      console.log("state:",this.hospitals);
     });
  }

  ngOnInit() {
  }

}
