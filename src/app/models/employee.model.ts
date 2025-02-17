import { parseAsInt, parseAsUnionType } from "../lib";
import { EmployeeRole, employeeRoles } from "./employee-role.type";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  image: string;

  role: EmployeeRole;
  hired: number; //year
}

export class Employee implements IEmployee {
  id: string = '';
  name: string = '';
  email: string = '';
  image: string = '';

  role: EmployeeRole = 'assistant';
  hired: number = 0; //year

  constructor(obj?: Partial<IEmployee>) {
    if (obj) {
      this.id = obj.id ?? this.id;
      this.name = obj.name ?? this.name;
      this.email = obj.email ?? this.email;
      this.image = obj.image ?? this.image;

      this.role = parseAsUnionType<EmployeeRole>(obj.role, employeeRoles)
        ?? this.role;
      this.hired = parseAsInt(obj.hired)
        ?? this.hired;
    }
  }
}