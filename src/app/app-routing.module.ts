import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from './Hospitals/hospital/hospital.component';
import { PatientComponent } from './patients/patient/patient.component';
import { BackgroundComponent } from './background/background.component';
import { AppointementComponent } from './appointements/appointement/appointement.component';


const routes: Routes = [
  
  {path:'hospital', component:HospitalComponent},
  {path:'patients', component:PatientComponent},
  {path:'home', component:BackgroundComponent},
  {path:'appointement', component:AppointementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
