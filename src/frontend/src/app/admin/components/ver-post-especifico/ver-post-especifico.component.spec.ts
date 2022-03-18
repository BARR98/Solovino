import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPostEspecificoComponent } from './ver-post-especifico.component';

describe('VerPostEspecificoComponent', () => {
  let component: VerPostEspecificoComponent;
  let fixture: ComponentFixture<VerPostEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPostEspecificoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPostEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
