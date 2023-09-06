import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeviceService } from '../../services';
import { DevicesActions } from './devices.action';


@Injectable()
export class DevicesEffects {

  readonly fetchDevices = createEffect(() => this.actions$.pipe(
    ofType(DevicesActions.fetch),
    exhaustMap(() =>
      this.deviceService.getDevices().pipe(
        map(devices => DevicesActions.fetchSuccess({ devices })),
        catchError(({payload}) => of(DevicesActions.fetchFailure({ payload})))
      )
    )
  ));

  constructor(private actions$: Actions, private deviceService: DeviceService) {}
}
