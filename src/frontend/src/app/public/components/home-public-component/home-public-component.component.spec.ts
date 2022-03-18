import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePublicComponentComponent } from './home-public-component.component';

describe('HomePublicComponentComponent', () => {
  let component: HomePublicComponentComponent;
  let fixture: ComponentFixture<HomePublicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePublicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePublicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
