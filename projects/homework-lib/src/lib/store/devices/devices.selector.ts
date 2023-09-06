import { createSelector } from "@ngrx/store";
import { AppState } from "../app-store";

export const devicesFeature = (state: AppState) => state.devices;

export const selectDevices = createSelector(devicesFeature, (devices) => devices);

// export const selectLabel = (device: Device) =>
