import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBankOrganizationInfoComponent } from './local-bank-organization-info.component';

describe('LocalBankOrganizationInfoComponent', () => {
  let component: LocalBankOrganizationInfoComponent;
  let fixture: ComponentFixture<LocalBankOrganizationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalBankOrganizationInfoComponent]
    });
    fixture = TestBed.createComponent(LocalBankOrganizationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
