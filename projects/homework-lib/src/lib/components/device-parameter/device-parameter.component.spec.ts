import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceParameterComponent } from './device-parameter.component';

describe('DeviceParameterComponent', () => {
  let component: DeviceParameterComponent;
  let fixture: ComponentFixture<DeviceParameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeviceParameterComponent]
    });
    fixture = TestBed.createComponent(DeviceParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
