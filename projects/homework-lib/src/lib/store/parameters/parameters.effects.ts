import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DeviceService } from '../../services';
import { ParametersActions } from './parameters.action';


@Injectable()
export class ParametersEffects {

  readonly fetchParameters = createEffect(() => this.actions$.pipe(
    ofType(ParametersActions.fetch),
    tap(() => this.store.dispatch(ParametersActions.loading({val: true}))),
    exhaustMap(({id}) =>
      this.deviceService.getDeviceParameters(id).pipe(
        map(parameters => ParametersActions.fetchSuccess({ parameters })),
        tap(() => this.store.dispatch(ParametersActions.loading({val: false}))),
        catchError(({payload}) => of(ParametersActions.fetchFailure({ payload })))
      )
    )
  ));

  readonly updateParameters = createEffect(() => this.actions$.pipe(
    ofType(ParametersActions.update),
    exhaustMap(({id, value}) =>
      this.deviceService.updateParameterValue(id, { value }).pipe(
        map(() => ParametersActions.updateSuccess({id, value})),
        catchError(({payload}) => of(ParametersActions.updateFailure({ payload })))
      )
    )
  ));

  readonly toggleError = createEffect(() => this.actions$.pipe(
    ofType(ParametersActions.clientError),
    tap(({payload}) => {
      const { status, message } = payload;
      // Trigger notification or use selector in component to specifically
      // show the error to user at given context (where it occured)
      alert(`Error! ${status}: ${message}`);
    })
  ), { dispatch: false});

  constructor(private actions$: Actions, private deviceService: DeviceService, private store: Store) {}
}
