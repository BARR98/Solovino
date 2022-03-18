import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDonacionesComponent } from './public-donaciones.component';

describe('PublicDonacionesComponent', () => {
  let component: PublicDonacionesComponent;
  let fixture: ComponentFixture<PublicDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDonacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
