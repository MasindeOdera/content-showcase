import React from 'react';
import { SidebarContainer, SidebarLink } from "./styles/sidebar/sidebar.styles.ts";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/publications">Publications</SidebarLink>
      <SidebarLink to="/about">About</SidebarLink>
      <SidebarLink to="/contact">Contact</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
