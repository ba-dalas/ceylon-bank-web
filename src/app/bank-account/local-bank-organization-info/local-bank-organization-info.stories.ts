import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';

import { LocalBankOrganizationInfoComponent } from "./local-bank-organization-info.component";
import { branchCodeList, branchList, countryList, districtList, thanaList } from "../test-data/test-data";
import { SharedModule } from "src/app/shared/shared.module";



const meta: Meta<LocalBankOrganizationInfoComponent> = {
  component: LocalBankOrganizationInfoComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        SharedModule
      ],
    })
  ],
  render: (args: LocalBankOrganizationInfoComponent) => ({
    props: {
      ...args,

    },
  }),
};

export default meta;
type Story = StoryObj<LocalBankOrganizationInfoComponent>;

export const EmptyForm: Story = {
  args: {
  },
};

export const MainForm: Story = {
  args: {
    branchList: branchList,
    branchCodeList:branchCodeList,
    countryList:countryList,
    districtList:districtList,
    thanaList:thanaList


  },
};
