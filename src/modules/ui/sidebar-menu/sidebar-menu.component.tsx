import {
  faBox,
  faFileInvoice,
  faRocket,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SidebarMenuItem from '../sidebar-menu-item/sidebar-menu-item';
import { useNavigate } from '@reach/router';

const SidebarMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-16">
      <SidebarMenuItem
        icon={faRocket}
        text="Dashboard"
        selected={true}
        onClick={() => navigate('/')}
      ></SidebarMenuItem>
      <SidebarMenuItem icon={faUser} text="Clients"></SidebarMenuItem>
      <SidebarMenuItem icon={faFileInvoice} text="Invoices"></SidebarMenuItem>
      <SidebarMenuItem icon={faUsers} text="Team"></SidebarMenuItem>
      <SidebarMenuItem
        icon={faBox}
        text="Projects"
        onClick={() => navigate('/projects')}
      ></SidebarMenuItem>
    </div>
  );
};

export default SidebarMenu;
