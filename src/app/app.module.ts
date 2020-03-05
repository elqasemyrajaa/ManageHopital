import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page-section/navbar/navbar.component';
import { HospitalComponent } from './Hospitals/hospital/hospital.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule, Store} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { HospitalReducer } from './Hospitals/store/hopital.reducer';
import { UserEffect } from './Hospitals/store/hopital.effect';
import { AppointementComponent } from './appointements/appointement/appointement.component';
import { PatientComponent } from './patients/patient/patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material/material.module';
import { BackgroundComponent } from './background/background.component';
import { PatientsDetailsComponent } from './patients/patients-details/patients-details.component';
import { AppointementReducer } from './appointements/store/appointement.reducer';
import { AppsEffect } from './appointements/store/appointement.effects';
import { CustomerEffect } from './patients/store/patient.effect';
import { patientReducer } from './patients/store/patient.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HospitalComponent,
    AppointementComponent,
    PatientComponent,
    BackgroundComponent,
    PatientsDetailsComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({"hospital":HospitalReducer,"appointements":AppointementReducer}),
    EffectsModule.forRoot([UserEffect,AppsEffect]),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
