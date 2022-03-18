import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionAdminComponent } from './organizacion-admin.component';

describe('OrganizacionAdminComponent', () => {
  let component: OrganizacionAdminComponent;
  let fixture: ComponentFixture<OrganizacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
