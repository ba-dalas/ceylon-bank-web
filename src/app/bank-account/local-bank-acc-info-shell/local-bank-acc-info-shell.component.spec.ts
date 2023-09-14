import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBankAccInfoShellComponent } from './local-bank-acc-info-shell.component';

describe('LocalBankAccInfoShellComponent', () => {
  let component: LocalBankAccInfoShellComponent;
  let fixture: ComponentFixture<LocalBankAccInfoShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalBankAccInfoShellComponent]
    });
    fixture = TestBed.createComponent(LocalBankAccInfoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
