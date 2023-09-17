import { Component, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { UserType } from '../models/user-type.model';

@Component({
  selector: 'app-user-edit-shell',
  templateUrl: './user-edit-shell.component.html',
  styleUrls: ['./user-edit-shell.component.scss']
})
export class UserEditShellComponent implements OnInit, OnChanges {

  userTypes = signal<UserType[]>([]);

  ngOnInit(): void {

    this.getUserType()
  }

  ngOnChanges(changes: SimpleChanges): void {}

  getUserType() {
    // this.userTypes.set( [] )
  }

}
