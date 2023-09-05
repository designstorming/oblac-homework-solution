import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device, DeviceParameter } from '../models/device.model';

export const deviceApi = {
  devices: '/devices',
  device: (id: Device['id']) => `/devices/${id}`,
  deviceParameters: (id: Device['id']) => `/devices/${id}/parameters`,
  parameters: `/device-parameters`,
  parameter: (id: DeviceParameter['id']) => `/device-parameters/${id}`,
  torque: (id: Device['id']) => `/device/${id}/cogging-torque-data`,
}

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceTsService {

  getDevices() {
    return this.http.get<Device[]>(deviceApi.devices);
  }

  getDevice(id: Device['id']) {
    return this.http.get<Device>(deviceApi.device(id))
  }

  updateDeviceName(id: Device['id'], data: Pick<Device, 'name'>) {
    return this.http.patch<Pick<Device, 'name'>>(deviceApi.device(id), { data })
  }

  getDeviceParameters(id: Device['id']) {
    return this.http.get<DeviceParameter[]>(deviceApi.deviceParameters(id))
  }

  getParameters(id: Device['id']) {
    const params = new HttpParams({
      fromObject: {
        deviceId: id
      }
    });

    return this.http.get<DeviceParameter[]>(deviceApi.parameters, { params });
  }

  getParameter(id: DeviceParameter['id']) {
    return this.http.get<DeviceParameter>(deviceApi.parameters);
  }

  updateParameterValue(id: DeviceParameter['id'], data: Pick<DeviceParameter, 'value'>) {
    return this.http.patch<Pick<DeviceParameter, 'value'>>(deviceApi.parameters, { data });
  }

  getTorqueData(id: Device['id']) {
    return this.http.get<number[]>(deviceApi.torque(id));
  }


  constructor(private http: HttpClient) { }
}
