import React from 'react';
import { SidebarContainer, SidebarLink, SidebarIconWrapper } from "./styles/sidebar/sidebar.styles.ts";
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">
        <SidebarIconWrapper>
          <HomeIcon fontSize="inherit" />
          <span>Home</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarLink to="/publications">
        <SidebarIconWrapper>
          <FeedIcon fontSize="inherit" />
          <span>Publications</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarLink to="/about">
        <SidebarIconWrapper>
          <HelpCenterIcon fontSize="inherit" />
          <span>About</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarLink to="/contact">
        <SidebarIconWrapper>
          <ContactMailIcon fontSize="inherit" />
          <span>Contact</span>
        </SidebarIconWrapper>
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
