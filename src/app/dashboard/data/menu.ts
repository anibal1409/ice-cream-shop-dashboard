import { UserRole } from '../../users/model';
import { optionMenu } from '../models';

export const MENU: Array<optionMenu> = [
  {
    name: 'Categorías',
    value: 'categories',
    icon: 'group_work',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.WarehouseManager],
  },
  {
    name: 'Productos',
    value: 'products',
    icon: 'icecream',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.WarehouseManager],
  },
  {
    name: 'Pedidos',
    value: 'orders',
    icon: 'orders',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.WarehouseManager],
  },
  {
    name: 'Ventas',
    value: 'sales',
    icon: 'receipt_long',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.SalesAdvisor, UserRole.WarehouseManager],
  },
  {
    name: 'Clientes',
    value: 'customers',
    icon: 'group',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.SalesAdvisor, UserRole.WarehouseManager],
  },
  {
    name: 'Estadísticas',
    value: 'statistics',
    icon: 'monitoring',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.WarehouseManager],
  },
  {
    name: 'Usuarios',
    value: 'users',
    icon: 'person',
    permissions: [UserRole.Super, UserRole.Manager],
  },
]