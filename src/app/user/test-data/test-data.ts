import { Branch } from "../models/branch.model";
import { Division } from "../models/division.model";
import { UserType } from "../models/user-type.model";

export const userTypes: UserType[] =
  [
    {
      "id": "1",
      "value": "Admin"
    },
    {
      "id": "2",
      "value": "User"
    },
    {
      "id": "3",
      "value": "Viewer"
    }
  ];

  export const divisionList: Division[] =
  [
    {
      "id": "1",
      "value": "Dhaka"
    },
    {
      "id": "2",
      "value": "Comilla"
    },
    {
      "id": "3",
      "value": "Mymensingh"
    }
  ];


  export const branchList: Branch[] =
  [
    {
      "id": "1",
      "value": "Dhaka"
    },
    {
      "id": "2",
      "value": "Comilla"
    },
    {
      "id": "3",
      "value": "Mymensingh"
    }
  ]
  ;
