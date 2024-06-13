import { Icons } from '@/components/icons';
import { NavItem, SidebarNavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  nim: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Anisa Shafira',
    nim: '2341727005'
  },
  {
    id: 2,
    name: 'Dias Rachma Rosalina',
    nim: '2341727003'
  },
  {
    id: 3,
    name: 'Fahmi Quraisy Abdillah',
    nim: '2341727006'
  },
  {
    id: 4,
    name: 'Fitria Meliyana',
    nim: '2341727002'
  },
  {
    id: 5,
    name: 'Muhamad Al Faroby',
    nim: '2341727001'
  },
  {
    id: 6,
    name: 'Raden Mochamad Yusfi Arif',
    nim: '2341727004'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Logout',
    href: '/',
    icon: 'login',
    label: 'login'
  }
];
