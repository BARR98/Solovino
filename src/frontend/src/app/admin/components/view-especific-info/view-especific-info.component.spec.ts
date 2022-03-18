import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEspecificInfoComponent } from './view-especific-info.component';

describe('ViewEspecificInfoComponent', () => {
  let component: ViewEspecificInfoComponent;
  let fixture: ComponentFixture<ViewEspecificInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEspecificInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEspecificInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
