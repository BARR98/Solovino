import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEspecificAdopcionComponent } from './view-especific-adopcion.component';

describe('ViewEspecificAdopcionComponent', () => {
  let component: ViewEspecificAdopcionComponent;
  let fixture: ComponentFixture<ViewEspecificAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEspecificAdopcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEspecificAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
