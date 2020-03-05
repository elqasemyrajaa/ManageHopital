import { Injectable} from '@angular/core';
import { Actions,Effect,ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of} from 'rxjs';
import { map,mergeMap,catchError} from 'rxjs/operators'
import * as HospitalActions from './hopital.actions';
import { Hospital } from 'src/app/Hospitals/hospital';
import { HospitalService } from '../hospital.service';


@Injectable()
export class UserEffect{
constructor(private service:HospitalService,private actions$:Actions){
}
/******************************get All hospitals************************************** */
@Effect()
LoadHospitals$:Observable<Action>=this.actions$.pipe(
    ofType<HospitalActions.LoadHospitals>(
        HospitalActions.HospitalActionTypes.LOAD_HOSPITALS
    ),
    mergeMap((actions:HospitalActions.LoadHospitals)=>
    this.service.getAllHopitaux().pipe(
        map((hospitals:Hospital[])=>
        new HospitalActions.LoadHospitalsSuccess(hospitals)
        ),
        catchError(err=>of(new HospitalActions.LoadHospitalsFailed(err)))
    )
    )
)
}