import * as patientActions from "./patient.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Patients } from "../patients";
import * as fromRoot from "../store/store";

export interface PatientState extends EntityState<Patients> {
  selectedPatientId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.StoreInterface {
  patients: PatientState;
}

export const patientAdapter: EntityAdapter<Patients> = createEntityAdapter<
  Patients
>();

export const defaultPatient: PatientState = {
  ids: [],
  entities: {},
  selectedPatientId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = patientAdapter.getInitialState(defaultPatient);

export function patientReducer(
  state = initialState,
  action: patientActions.Action
): PatientState {
  switch (action.type) {
    case patientActions.PatientActionTypes.LOAD_PATIENTS_SUCCESS: {
      return patientAdapter.addAll(action.playload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case patientActions.PatientActionTypes.LOAD_PATIENTS_FAILED: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.playload
      };
    }

    case patientActions.PatientActionTypes.LOAD_PATIENT_SUCCESS: {
      return patientAdapter.addOne(action.payload, {
        ...state,
        selectedPatientId: action.payload.id
      });
    }
    case patientActions.PatientActionTypes.LOAD_PATIENT_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getPatientFeatureState = createFeatureSelector<PatientState>(
  "patients"
);

export const getPatients = createSelector(
    getPatientFeatureState,
  patientAdapter.getSelectors().selectAll
);

export const getPatientsLoading = createSelector(
    getPatientFeatureState,
  (state: PatientState) => state.loading
);

export const getPatientsLoaded = createSelector(
    getPatientFeatureState,
  (state: PatientState) => state.loaded
);

export const getError = createSelector(
    getPatientFeatureState,
  (state: PatientState) => state.error
);

export const getCurrentPatientId = createSelector(
    getPatientFeatureState,
  (state: PatientState) => state.selectedPatientId
);
export const getCurrentPatient = createSelector(
    getPatientFeatureState,
    getCurrentPatientId,
  state => state.entities[state.selectedPatientId]
);
