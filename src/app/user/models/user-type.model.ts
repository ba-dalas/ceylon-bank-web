import { DdlType } from "./ddl-type.model";

export interface UserType extends DdlType {
  id: string;
  value: string;
}
