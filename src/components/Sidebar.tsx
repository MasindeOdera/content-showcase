import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 110px;
  height: 100vh;
  background-color: #002B48;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  position: fixed;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 18px;

  &:hover {
    color: #1e90ff;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/publications">Publications</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </SidebarContainer>
  );
};

export default Sidebar;
