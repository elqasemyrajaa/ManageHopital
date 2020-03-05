import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable,of} from "rxjs";
import {map, mergeMap, catchError} from "rxjs/operators";
import {PatientsService} from "../patients.service";
import * as patientActions from "../store/patient.actions";
import {Patients} from "../patients";

@Injectable()
export class CustomerEffect {
  constructor(
    private actions$: Actions,
    private patientService: PatientsService
  ) {}
  @Effect()
  loadPatients$: Observable<Action>=this.actions$.pipe(
    ofType<patientActions.LoadPatients>(
      patientActions.PatientActionTypes.LOAD_PATIENTS
    ),
    mergeMap((action: patientActions.LoadPatients) =>
      this.patientService.getPatients().pipe(
        map(
          (patients: Patients[]) =>
            new patientActions.LoadPatientsSuccess(patients)
        ),
        catchError(err => of(new patientActions.LoadPatientsFailed(err)))
      )
    )
  );
  @Effect()
  loadPatient$: Observable<Action> = this.actions$.pipe(
    ofType<patientActions.LoadPatient>(
        patientActions.PatientActionTypes.LOAD_PATIENT
    ),
    mergeMap((action: patientActions.LoadPatient) =>
      this.patientService.getPatientsById(action.payload).pipe(
        map(
          (patient: Patients) =>
            new patientActions.LoadPatientSuccess(patient)
        ),
        catchError(err => of(new patientActions.LoadPatientFail(err)))
      )
    )
  );
}