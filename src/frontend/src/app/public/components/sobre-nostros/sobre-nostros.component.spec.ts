import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNostrosComponent } from './sobre-nostros.component';

describe('SobreNostrosComponent', () => {
  let component: SobreNostrosComponent;
  let fixture: ComponentFixture<SobreNostrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreNostrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNostrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
