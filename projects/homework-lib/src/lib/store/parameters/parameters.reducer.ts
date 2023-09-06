import { createReducer, on } from '@ngrx/store';
import { DeviceParameter, ErrorResponse } from '../../models';
import { ParametersActions } from './parameters.action';

export interface ParametersModel {
  isLoading: boolean;
  error: ErrorResponse | null;
  list: DeviceParameter[];
}

const initialState: ParametersModel = {
  isLoading: false,
  error: null,
  list: [],
}

function fetchParametersSuccess(state: ParametersModel, parameters: DeviceParameter[]): ParametersModel {
  return {...state, list: parameters };
}

function updateParametersSuccess(state: ParametersModel, id: DeviceParameter['id'], value: DeviceParameter['value']): ParametersModel {
  const param = state.list.find(p => p.id == id);

  if(!param) return state;

  const index = state.list.indexOf(param);
  const newParam = {...param, value};
  let cloneList = [...state.list];
  cloneList.splice(index, 1, newParam);

  return {...state, list: cloneList};
}

function setLoadingState(state: ParametersModel, val: ParametersModel['isLoading']) {
  return {...state, isLoading: val};
}

function toggleError(state: ParametersModel, payload: ParametersModel['error']) {
  return {...state, error: payload};
}

export const ParametersReducer = createReducer(
  initialState,
  on(ParametersActions.fetchSuccess, (state, { parameters }) => fetchParametersSuccess(state, parameters)),
  on(ParametersActions.updateSuccess, (state, { id, value }) => updateParametersSuccess(state, id, value)),
  on(ParametersActions.loading, (state, { val }) => setLoadingState(state, val)),
  on(ParametersActions.clientError, (state, { payload }) => toggleError(state, payload)),
);
