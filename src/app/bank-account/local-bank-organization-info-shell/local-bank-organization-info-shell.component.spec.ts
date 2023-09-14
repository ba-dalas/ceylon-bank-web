import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBankOrganizationInfoShellComponent } from './local-bank-organization-info-shell.component';

describe('LocalBankOrganizationInfoShellComponent', () => {
  let component: LocalBankOrganizationInfoShellComponent;
  let fixture: ComponentFixture<LocalBankOrganizationInfoShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalBankOrganizationInfoShellComponent]
    });
    fixture = TestBed.createComponent(LocalBankOrganizationInfoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
