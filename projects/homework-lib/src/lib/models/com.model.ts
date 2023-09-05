/**
 * Model meant for typing the websocket connection
 */

import { DeviceParameter } from "./device.model";

/* Request */
export const ComEvent = {
  START: 'startMonitoring',
  STOP: 'stopMonitoring'
} as const;

export type ComEvent = (typeof ComEvent)[keyof typeof ComEvent];

export interface ComRequestData {
  topic: string;
  interval?: number,
  ids?: DeviceParameter['id'][]
}

export interface ComRequestMessage {
  event: ComEvent,
  data: ComRequestData
}

/* Response */
export interface ComResponseData {
  values: number[];
}

export interface ComResponseMessage {
  topic: 'string',
  data: ComResponseData
}
