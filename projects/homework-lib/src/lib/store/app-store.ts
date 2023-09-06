import { Action, ActionReducer } from '@ngrx/store';
import { Device } from '../models';
import { DevicesEffects } from './devices/devices.effects';
import { DevicesReducer } from './devices/devices.reducer';
import { ParametersEffects } from './parameters/parameters.effects';
import { ParametersModel, ParametersReducer } from './parameters/parameters.reducer';

export interface AppState {
  devices: Device[];
  parameters: ParametersModel;
}

export interface AppStore {
  devices: ActionReducer<Device[], Action>;
  parameters: ActionReducer<ParametersModel, Action>;
}

export const appStore: AppStore = {
  devices: DevicesReducer,
  parameters: ParametersReducer
};

export const appEffects = [DevicesEffects, ParametersEffects];
