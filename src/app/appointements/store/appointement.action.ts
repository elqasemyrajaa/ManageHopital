import {Action} from '@ngrx/store'
import {Appointement} from 'src/app/appointements/appointement'
import {Update} from '@ngrx/entity';

export enum AppointementActionTypes{
    LOAD_APPOINTEMENTS="[appointement] Load Appointements",
    LOAD_APPOINTEMENTS_SUCCESS="[appointement] Load Appointements Success",
    LOAD_APPOINTEMENTS_FAILED="[appointement] Load Appointements Failed",
  }
  export class LoadAppointements implements Action{
    readonly type=AppointementActionTypes.LOAD_APPOINTEMENTS
}
export class LoadAppointementsSuccess implements Action{
    readonly type=AppointementActionTypes.LOAD_APPOINTEMENTS_SUCCESS
    constructor(public playload:Appointement[]){
    }
}
export class LoadAppointementsFailed implements Action{
    readonly type=AppointementActionTypes.LOAD_APPOINTEMENTS_FAILED
    constructor(public playload:string){}
}
export type Action=
LoadAppointements
|LoadAppointementsSuccess
|LoadAppointementsFailed