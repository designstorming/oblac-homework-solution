import { Component, OnInit } from '@angular/core';

import { Device, DeviceParameter } from '@homework-lib/models';
import { DevicesFacade } from '@homework-lib/store/devices';
import { ParametersFacade } from '@homework-lib/store/parameters';
import { buildLabel } from '@homework-lib/utils';

@Component({
  selector: 'hw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  protected devices$ = this.devicesFacade.devices$;
  protected parameters$ = this.parametersFacade.parameters$;
  protected parametersLoading$ = this.parametersFacade.isLoading$;

  constructor(
    private devicesFacade: DevicesFacade,
    private parametersFacade: ParametersFacade,
  ) {}

  ngOnInit(): void {
    this.devicesFacade.fetchDevices();
  }

  protected handleActivate(id: Device['id']) {
    this.parametersFacade.fetchParameters(id);
  }

  protected handleUpdate({id, value}: {id: DeviceParameter['id'], value: DeviceParameter['value']}) {
    this.parametersFacade.updateParamter(id, value);
  }

  protected trackByParamId(index: number, param: DeviceParameter) {
    return buildLabel(param);
  }
}
