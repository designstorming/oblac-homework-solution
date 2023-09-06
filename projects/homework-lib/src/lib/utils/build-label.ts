import { DeviceParameter } from "../models";

export function buildLabel(param: DeviceParameter) {
    const { index, subindex, name } = param;
    return `0x${index}:${subindex.toString().padStart(2, '0')}${name ? ':' + name : ''}`;
}
