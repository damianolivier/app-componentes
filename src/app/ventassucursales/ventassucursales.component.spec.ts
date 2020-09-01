import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentassucursalesComponent } from './ventassucursales.component';

describe('VentassucursalesComponent', () => {
  let component: VentassucursalesComponent;
  let fixture: ComponentFixture<VentassucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentassucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentassucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
