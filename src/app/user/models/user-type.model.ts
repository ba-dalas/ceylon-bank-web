import { DdlType } from "src/app/core/models/ddl-type.model";


export interface UserType extends DdlType {
  id: string;
  value: string;
}
