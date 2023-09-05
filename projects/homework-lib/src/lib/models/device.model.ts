export type DeviceSN = `${number}-${number}-${number}-${number}`;
export type DeviceMacAddress = `${string}:${string}:${string}:${string}:${string}:${string}`;
export type ComponentVersion = `${string}.${number}`

export interface DeviceComponents {
  name: string;
  serialNumber: DeviceSN;
  version: ComponentVersion
}

export interface DeviceDetails {
  macAddress: DeviceMacAddress;
  serialNumber: DeviceSN;
  name: string;
  id: number;
  version: string;
  components: DeviceComponents[]
}

export interface DeviceHWDescription {
  fileVersion: `${number}.${number}.${number}`,
  device: DeviceDetails
}

export interface Device {
  id: DeviceSN;
  name: string;
  hardwareDescription: DeviceHWDescription
}

export interface DeviceParameter {
  id: `${string}x${string}:${string}.${string}-${string}-${string}-${string}`;
  deviceId: DeviceSN;
  index: number;
  subIndex: number;
  name: string;
  type: Uppercase<string>
  min: number;
  max: number;
  value: number;
  unit: string;
  mandatory: boolean;
  access: string;
  options: {};
  description: string;
}
