import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabla1Component } from './tabla1.component';

describe('Tabla1Component', () => {
  let component: Tabla1Component;
  let fixture: ComponentFixture<Tabla1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tabla1Component]
    });
    fixture = TestBed.createComponent(Tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});