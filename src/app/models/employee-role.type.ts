export const employeeRoles = [
  'executive', 
  'administrator', 
  'manager', 
  'lead', 
  'assistant'
] as const;

export type EmployeeRole = typeof employeeRoles[number];