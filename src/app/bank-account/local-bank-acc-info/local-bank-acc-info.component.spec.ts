import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBankAccInfoComponent } from './local-bank-acc-info.component';

describe('LocalBankAccInfoComponent', () => {
  let component: LocalBankAccInfoComponent;
  let fixture: ComponentFixture<LocalBankAccInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalBankAccInfoComponent]
    });
    fixture = TestBed.createComponent(LocalBankAccInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
