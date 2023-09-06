import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Device, DeviceParameter } from "../../models";
import { AppState } from "../app-store";
import { ParametersActions } from "./parameters.action";
import { selectIsLoading, selectParameters } from "./parameters.selector";

@Injectable({
  providedIn: 'root'
})
export class ParametersFacade {

  constructor(private store: Store<AppState>) {}

  readonly parameters$ = this.store.select(selectParameters);
  readonly isLoading$ = this.store.select(selectIsLoading);

  fetchParameters(id: Device['id']) {
    this.store.dispatch(ParametersActions.fetch({id}));
  }

  updateParamter(id: DeviceParameter['id'], value: DeviceParameter['value']) {
    this.store.dispatch(ParametersActions.update({id, value}));
  }
}
