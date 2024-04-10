import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaGoogleComponent } from './mapa-google.component';

describe('MapaGoogleComponent', () => {
  let component: MapaGoogleComponent;
  let fixture: ComponentFixture<MapaGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaGoogleComponent]
    });
    fixture = TestBed.createComponent(MapaGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
