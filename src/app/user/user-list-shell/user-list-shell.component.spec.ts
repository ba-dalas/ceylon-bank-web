import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListShellComponent } from './user-list-shell.component';

describe('UserListShellComponent', () => {
  let component: UserListShellComponent;
  let fixture: ComponentFixture<UserListShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListShellComponent]
    });
    fixture = TestBed.createComponent(UserListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
