import { createActionGroup, props } from '@ngrx/store';
import { Device, DeviceParameter, ErrorResponse } from '../../models';

export const ParametersActions = createActionGroup({
  source: 'Parameters',
  events: {
    'Fetch': props<{ id: Device['id']}>(),
    'Fetch Success': props<{ parameters: DeviceParameter[]}>(),
    'Fetch Failure': props<{ payload: ErrorResponse }>(),
    'Update': props<{ id: DeviceParameter['id'], value: DeviceParameter['value']}>(),
    'Update Success': props<{ id: DeviceParameter['id'], value: DeviceParameter['value']}>(),
    'Update Failure': props<{ payload: ErrorResponse }>(),
    'Loading': props<{ val: boolean }>(),
    'Client Error': props<{ payload: ErrorResponse }>()
  }
})
