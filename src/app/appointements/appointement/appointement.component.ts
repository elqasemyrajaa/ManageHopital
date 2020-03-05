import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppsActions from '../store/appointement.action'
@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {
  appointements
  constructor(private store:Store<any>) { 
    this.store.dispatch(new AppsActions.LoadAppointements())
     this.store.subscribe(state=>{
      this.appointements=state.appointements.appointements
      console.log("state Appointement:",this.appointements);
     });
  }

  ngOnInit() {
  }

}
