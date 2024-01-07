import { Icon } from '@iconify/react';
import { LuUser } from "react-icons/lu";

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="16" height="16" />,
  },
  {
    title: 'Human Resource',
    path: '/humanResource/',
    icon: <LuUser width="16" height="16" />,
    submenu: true,
    subMenuItems: [
      { title: 'Overview', path: '/humanResource/overview' },
      { title: 'Attendance', path: '/humanResource/attendance' },
      { title: 'Onboarding', path: '/humanResource/onboarding' },
      { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="16" height="16" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="16" height="16" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="16" height="16" />,
  },
];