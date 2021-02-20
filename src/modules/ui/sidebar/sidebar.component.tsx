import { faCog } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import UserInfo from '../../auth/components/user-info/user-info.component';
import SidebarMenuItem from '../sidebar-menu-item/sidebar-menu-item';
import SidebarMenu from '../sidebar-menu/sidebar-menu.component';

import './sidebar.css';

const AntaresSidebar: React.FC = () => {
  return (
    <div className="antares-sidebar flex flex-col">
      <UserInfo></UserInfo>
      <div className="mt-16"></div>
      <SidebarMenu></SidebarMenu>
      <div style={{ flex: 1 }}></div>
      <div className="flex flex-col items-center justify-center pb-4">
        <SidebarMenuItem icon={faCog} color="rgba(0, 0, 0, 0.45)" text="Settings"></SidebarMenuItem>
      </div>
    </div>
  );
};

export default AntaresSidebar;
