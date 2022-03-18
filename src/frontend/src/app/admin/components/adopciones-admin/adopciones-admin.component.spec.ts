import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionesAdminComponent } from './adopciones-admin.component';

describe('AdopcionesAdminComponent', () => {
  let component: AdopcionesAdminComponent;
  let fixture: ComponentFixture<AdopcionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopcionesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
