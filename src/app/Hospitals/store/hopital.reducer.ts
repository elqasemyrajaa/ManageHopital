
import {Hospital} from 'src/app/Hospitals/hospital';
import * as fromRoot from "./store"
import {createFeatureSelector,createSelector, State} from '@ngrx/store'
import * as HospitalActions from "./hopital.actions"
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface HospitalState{
    hospitals:Hospital[],
    selectedUserId: number | null,
    loading:boolean,
    loaded:boolean,
    error:string
}
export interface store extends fromRoot.StoreInterface{
    hospitals:HospitalState
}
export const hospitalAdapter: EntityAdapter<Hospital> = createEntityAdapter<
  Hospital
>();
const initialStates:HospitalState={
    hospitals:[],
    selectedUserId:null,
    loaded:false,
    loading:false,
    error:""
}
export const initialState = hospitalAdapter.getInitialState(initialStates);
export function HospitalReducer(state=initialState,action:HospitalActions.Action):HospitalState{
    switch(action.type){
        case HospitalActions.HospitalActionTypes.LOAD_HOSPITALS:
        console.log("state : ",state)
        {
            return {
                ...state,
                loading:true
            }
        }
        case HospitalActions.HospitalActionTypes.LOAD_HOSPITALS_SUCCESS:{
            return{
                ...state,
                loading:false,
                loaded:true,
                hospitals:action.playload
            }
        }
        case HospitalActions.HospitalActionTypes.LOAD_HOSPITALS_FAILED:{
            return{
                ...state,
                loading:false,
                loaded:false,
                error:action.playload
            }
        }
        default:{
            return state
        }
    }
}