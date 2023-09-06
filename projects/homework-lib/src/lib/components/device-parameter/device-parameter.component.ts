import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { Access, DeviceParameter } from '../../models';
import { buildLabel } from '../../utils';

@Component({
  selector: 'hw-device-parameter',
  standalone: true,
  imports: [CommonModule, FormsModule, OverlayModule],
  templateUrl: './device-parameter.component.html',
  styleUrls: ['./device-parameter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex flex-column mt-3'
  },
})
export class DeviceParameterComponent {

  #params: DeviceParameter = {} as DeviceParameter;
  #value: any = 0;

  @HostBinding('class') className: {[key: string]: boolean} = {};

  @ViewChild('input') inputControl!: FormControl;

  @Input() set params(params: DeviceParameter) {
    this.#params = params;
    this.value = this.#params.value;
  };
  get params() { return this.#params; };

  @Output() onUpdate = new EventEmitter<{ id: DeviceParameter['id'], value: DeviceParameter['value']}>();

  protected showDesc = false;

  protected get id() {
    return `param-${this.label}`.toLowerCase().replace(/\s+/, '-');
  }

  protected get isDisabled() {
    return this.params.access === Access.RO;
  }

  protected get description() {
    return this.sanitized.bypassSecurityTrustHtml(this.params.description);
  }

  protected get value() { return this.#value; }
  protected set value(value: number) { this.#value = value; }

  protected get label() {
    return buildLabel(this.params)
  }

  protected handleUpdate(id: DeviceParameter['id']) {
    /**
     * Local state can be introduced (in store) to disable the button
     * and show the loader until the server respond and to trigger
     * the success/error message as feedback to user.
     *
     * const ComponentState = {
     *   IDLE: 'idle',
     *   PENDING: 'pending',
     *   SUCCESS: 'success',
     *   ERROR: 'error',
     * } as const;
     *
     * type StateType = (typeof ComponentState)[keyof typeof ComponentState];
     */
    this.onUpdate.emit({id, value: this.value});
  }

  constructor(private sanitized: DomSanitizer) {}

}
