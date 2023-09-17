import { BranchCode } from "../models/branch-code.model";
import { Branch } from "../models/branch.model";
import { Country } from "../models/country.model";
import { District } from "../models/district.model";
import { Thana } from "../models/thana.model";


export const branchList: Branch[] = [
  {
    "id": "1",
    "value": "Dhaka"
  },
  {
    "id": "2",
    "value": "Mymensingh"
  }


];

export const branchCodeList: BranchCode[] = [
  {
    "code": "1",
    "value": "Gazipur"
  },
  {
    "code": "2",
    "value": "Uttara"
  }


];

export const districtList: District[] = [
  {
    "id": "1",
    "value": "Mymensingh"
  },
  {
    "id": "2",
    "value": "Sherpur"
  }


];

export const countryList: Country[] = [
  {
    "id": "1",
    "value": "Bangladesh"
  },
  {
    "id": "2",
    "value": "Canada"
  }

];

export const thanaList: Thana[] = [
  {
    "id": "10090999",
    "value": "Turag"
  },
  {
    "id": "2340987",
    "value": "Pallobi"
  }

];






