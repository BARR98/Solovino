import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEspecificAcountComponent } from './view-especific-acount.component';

describe('ViewEspecificAcountComponent', () => {
  let component: ViewEspecificAcountComponent;
  let fixture: ComponentFixture<ViewEspecificAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEspecificAcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEspecificAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
