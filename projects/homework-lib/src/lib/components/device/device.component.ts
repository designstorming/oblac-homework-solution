import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Device } from '../../models';

@Component({
  selector: 'hw-device',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceComponent {
  @Input() set device(device: Device) { this.device$.next(device) };

  @Output() onActivate = new EventEmitter<Device['id']>();

  protected readonly device$ = new BehaviorSubject<Device>({} as Device);

  handleActivate(id: Device['id']) {
    this.onActivate.emit(id);
  }
}
