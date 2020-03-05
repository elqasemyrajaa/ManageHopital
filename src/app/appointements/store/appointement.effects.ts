import { Injectable} from '@angular/core';
import { Actions,Effect,ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of} from 'rxjs';
import { map,mergeMap,catchError} from 'rxjs/operators'
import * as AppsActions from './appointement.action';
import { Appointement } from 'src/app/appointements/appointement';
import { AppointementService } from '../appointement.service';


@Injectable()
export class AppsEffect{
constructor(private service:AppointementService,private actions$:Actions){
}
/******************************get All Appointements************************************** */
@Effect()
LoadAppointement$:Observable<Action>=this.actions$.pipe(
    ofType<AppsActions.LoadAppointements>(
        AppsActions.AppointementActionTypes.LOAD_APPOINTEMENTS
    ),
    mergeMap((actions:AppsActions.LoadAppointements)=>
    this.service.getAppointement().pipe(
        map((appointements:Appointement[])=>
        new AppsActions.LoadAppointementsSuccess(appointements)
        ),
        catchError(err=>of(new AppsActions.LoadAppointementsFailed(err)))
    )
    )
)
}