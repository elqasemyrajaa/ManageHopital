import {Action} from '@ngrx/store'
import {Patients} from 'src/app/patients/patients';
import {Update} from '@ngrx/entity';

export enum PatientActionTypes{
    LOAD_PATIENTS="[patients] Load Patients",
    LOAD_PATIENTS_SUCCESS="[patients] Load Patients Success",
    LOAD_PATIENTS_FAILED="[patients] Load Patients Failed",
    LOAD_PATIENT="[patients] Load Patient",
    LOAD_PATIENT_SUCCESS="[patients] Load Patient Success",
    LOAD_PATIENT_FAILED="[patients] Load Patient Failed",
  }

  export class LoadPatients implements Action{
    readonly type=PatientActionTypes.LOAD_PATIENTS
}
export class LoadPatientsSuccess implements Action{
    readonly type=PatientActionTypes.LOAD_PATIENTS_SUCCESS
    constructor(public playload:Patients[]){
    }
}
export class LoadPatientsFailed implements Action{
    readonly type=PatientActionTypes.LOAD_PATIENTS_FAILED
    constructor(public playload:string){}
}
export class LoadPatient implements Action{
    readonly type = PatientActionTypes.LOAD_PATIENT;
  
    constructor(public payload: number) {}
  }
  
  export class LoadPatientSuccess implements Action {
    readonly type = PatientActionTypes.LOAD_PATIENT_SUCCESS;
  
    constructor(public payload: Patients) {}
  }
  
  export class LoadPatientFail implements Action {
    readonly type = PatientActionTypes.LOAD_PATIENT_FAILED;
  
    constructor(public payload: string) {}
  }
export type Action=
LoadPatients
|LoadPatientsSuccess
|LoadPatientsFailed
|LoadPatient
|LoadPatientSuccess
|LoadPatientFail