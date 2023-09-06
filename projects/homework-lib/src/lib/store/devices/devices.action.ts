import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Device, ErrorResponse } from '../../models';

export const DevicesActions = createActionGroup({
  source: 'Devices',
  events: {
    'Fetch': emptyProps(),
    'Fetch Success': props<{ devices: Device[]}>(),
    'Fetch Failure': props<{ payload: ErrorResponse }>(),
  }
})
