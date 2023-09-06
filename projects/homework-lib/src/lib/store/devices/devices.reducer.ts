import { createReducer, on } from '@ngrx/store';
import { Device } from '../../models';
import { DevicesActions } from './devices.action';

const initialState: Device[] = [];

function fetchDevicesSuccess(devices: Device[]): Device[] {
  return [...devices];
}


export const DevicesReducer = createReducer(
  initialState,
  on(DevicesActions.fetchSuccess, (state, { devices }) => fetchDevicesSuccess(devices)),
);
