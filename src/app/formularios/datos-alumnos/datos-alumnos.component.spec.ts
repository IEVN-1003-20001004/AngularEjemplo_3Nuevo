import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAlumnosComponent } from './datos-alumnos.component';

describe('DatosAlumnosComponent', () => {
  let component: DatosAlumnosComponent;
  let fixture: ComponentFixture<DatosAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosAlumnosComponent]
    });
    fixture = TestBed.createComponent(DatosAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
