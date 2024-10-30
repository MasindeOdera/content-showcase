import React from 'react';
import { useTranslation } from 'react-i18next';
import { SidebarContainer, SidebarLink, SidebarIconWrapper, SidebarFlags } from "./styles/sidebar/sidebar.styles.ts";
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LanguageSelector from './LanguageSelector.tsx';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SidebarContainer>
      <SidebarLink to="/">
        <SidebarIconWrapper>
          <HomeIcon fontSize="inherit" />
          <span>{t('home')}</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarLink to="/publications">
        <SidebarIconWrapper>
          <FeedIcon fontSize="inherit" />
          <span>{t('publications')}</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarLink to="/about">
        <SidebarIconWrapper>
          <HelpCenterIcon fontSize="inherit" />
          <span>{t('about')}</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarLink to="/contact">
        <SidebarIconWrapper>
          <ContactMailIcon fontSize="inherit" />
          <span>{t('contact')}</span>
        </SidebarIconWrapper>
      </SidebarLink>
      <SidebarFlags>
        <LanguageSelector />
      </SidebarFlags>
    </SidebarContainer>
  );
};

export default Sidebar;
