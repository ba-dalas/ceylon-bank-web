import { DdlType } from "src/app/core/models/ddl-type.model";


export interface Branch extends DdlType {
  id: string;
  value: string;
}
