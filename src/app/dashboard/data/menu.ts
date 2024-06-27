import { UserRole } from '../../users/model';
import { optionMenu } from '../models';

export const MENU: Array<optionMenu> = [
  {
    name: 'Categorías',
    value: 'exam-types',
    icon: 'group_work',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Productos',
    value: 'exams',
    icon: 'icecream',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Pedidos',
    value: 'exams',
    icon: 'orders',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Ventas',
    value: 'studies',
    icon: 'receipt_long',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Clientes',
    value: 'patients',
    icon: 'group',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist, UserRole.Administrativessistant, UserRole.LaboratoryAssistant],
  },
  {
    name: 'Estadísticas',
    value: 'statistics',
    icon: 'monitoring',
    permissions: [UserRole.Super, UserRole.Manager, UserRole.Bionalist],
  },
  {
    name: 'Usuarios',
    value: 'users',
    icon: 'person',
    permissions: [UserRole.Super, UserRole.Manager],
  },
]