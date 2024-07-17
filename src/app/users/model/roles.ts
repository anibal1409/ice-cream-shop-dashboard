
export enum UserRole {
  Super = 'super',
  SalesAdvisor = 'sales-advisor',
  Manager = 'manager',
  WarehouseManager = 'warehouse-manager',
}

export const USER_ROLES = [
  {
    name: 'Super usuario',
    value: UserRole.Super,
  },
  {
    name: 'Administrador',
    value: UserRole.Manager,
  },
  {
    name: 'Vendedor',
    value: UserRole.SalesAdvisor,
  },
  {
    name: 'Supervisor',
    value: UserRole.WarehouseManager,
  },
];


export const USER_ROLES_VALUE: { [key: string]: { name: string; value: UserRole} } = {
  [UserRole.Super]: USER_ROLES[0],
  [UserRole.Manager]: USER_ROLES[1],
  [UserRole.SalesAdvisor]: USER_ROLES[2],
  [UserRole.WarehouseManager]: USER_ROLES[3],
};
