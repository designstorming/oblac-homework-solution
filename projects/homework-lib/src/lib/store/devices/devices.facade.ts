import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app-store";
import { DevicesActions } from "./devices.action";
import { selectDevices } from "./devices.selector";

@Injectable({
  providedIn: 'root'
})
export class DevicesFacade {

  constructor(private store: Store<AppState>) {}

  readonly devices$ = this.store.select(selectDevices);

  fetchDevices() {
    this.store.dispatch(DevicesActions.fetch());
  }

}
