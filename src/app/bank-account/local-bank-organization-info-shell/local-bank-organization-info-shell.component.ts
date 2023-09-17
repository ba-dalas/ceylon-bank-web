import { Component, signal } from '@angular/core';
import { Branch } from '../models/branch.model';
import { BranchCode } from '../models/branch-code.model';

@Component({
  selector: 'app-local-bank-organization-info-shell',
  templateUrl: './local-bank-organization-info-shell.component.html',
  styleUrls: ['./local-bank-organization-info-shell.component.scss']
})
export class LocalBankOrganizationInfoShellComponent {

  branchList = signal<Branch[]>([]);
  branchCodeList = signal<BranchCode[]>([]);

}
