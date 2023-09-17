import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { action } from '@storybook/addon-actions';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatDividerModule } from '@angular/material/divider';
import { UserEditComponent } from "./user-edit.component";
import { branchList, divisionList, userTypes } from "../test-data/test-data";
import { MatSelectModule } from "@angular/material/select";



const meta: Meta<UserEditComponent> = {
  component: UserEditComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        MatSelectModule,
        MatDividerModule,

      ],
    })
  ],
  render: (args: UserEditComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<UserEditComponent>;

export const EmptyForm: Story = {
  args: {
  },
};

export const MainForm: Story = {
  args: {
    userTypes: userTypes,
    divisionList:divisionList,
    branchList:branchList
  },
};
